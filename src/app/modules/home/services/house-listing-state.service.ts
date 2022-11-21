import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { StateService } from "src/app/shared/store/state.service";
import { Filter } from "src/app/shared/models/filter";
import { HouseListingService } from "./api/house-listing.service";
import { HouseModelsCombiner } from "src/app/shared/models/house-models";
import { IHouse } from "src/app/shared/models/house";

interface HouseModelsState {
  houseModels: HouseModelsCombiner[];
  selectedTodoId: Number;
  filter: Filter;
}

const initialState: HouseModelsState = {
  houseModels: [],
  selectedTodoId: 0,
  filter: {
    blockNumber: "",
    landNumber: "",
    minPrice: 0,
    maxPrice: 0,
  },
};

@Injectable({
  providedIn: "root",
})
export class HouseListingStateService extends StateService<HouseModelsState> {
  private todosFiltered$: Observable<HouseModelsCombiner[]> = this.select(
    (state) => {
      return getTodosFiltered(state.houseModels, state.filter);
    }
  );

  todosDone$: Observable<HouseModelsCombiner[]> = this.todosFiltered$.pipe(
    map((todos) => todos.filter((todo) => todo))
  );

  houseListing$: Observable<HouseModelsCombiner[]> = this.todosFiltered$.pipe(
    map((todos) => todos)
  );

  filter$: Observable<Filter> = this.select((state) => state.filter);

  filterSource$: Observable<any> = this.select((state) => {
    let fields: any[] = [];
    let sources: any = {};
    state.houseModels.map((x) => {
      x.houses.map((y) => {
        fields.push(y.attributes);
      });
    });

    const blockNumber = fields.reduce(function (r, a) {
      r[a.block_number] = r[a.block_number] || [];
      r[a.block_number].push(a);
      return r;
    }, Object.create(null));

    const houseNumber = fields.reduce(function (r, a) {
      r[a.house_number] = r[a.house_number] || [];
      r[a.house_number].push(a);
      return r;
    }, Object.create(null));

    const landNumber = fields.reduce(function (r, a) {
      r[a.land_number] = r[a.land_number] || [];
      r[a.land_number].push(a);
      return r;
    }, Object.create(null));

    const status = fields.reduce(function (r, a) {
      r[a.status] = r[a.status] || [];
      r[a.status].push(a);
      return r;
    }, Object.create(null));

    const model = fields.reduce(function (r, a) {
      r[a.model] = r[a.model] || [];
      r[a.model].push(a);
      return r;
    }, Object.create(null));

    const houseType = fields.reduce(function (r, a) {
      r[a.house_type] = r[a.house_type] || [];
      r[a.house_type].push(a);
      return r;
    }, Object.create(null));

    sources["blockNumber"] = Object.keys(blockNumber);
    sources["houseNumber"] = Object.keys(houseNumber);
    sources["landNumber"] = Object.keys(landNumber);
    sources["status"] = Object.keys(status);
    sources["model"] = Object.keys(model);
    sources["houseType"] = Object.keys(houseType);
    return sources;
  });

  constructor(private apiService: HouseListingService) {
    super(initialState);
    this.load();
  }

  selectTodo(todo: HouseModelsCombiner) {
    this.setState({ selectedTodoId: todo.id });
  }

  initNewTodo() {
    this.setState({ selectedTodoId: 0 });
  }

  clearSelectedTodo() {
    this.setState({ selectedTodoId: undefined });
  }

  updateFilter(filter: Filter) {
    this.setState({
      filter: {
        ...this.state.filter,
        ...filter,
      },
    });
  }

  load() {
    this.apiService
      .getHouseModels()
      .subscribe((houseModels) => this.setState({ houseModels }));
  }
}

function getTodosFiltered(
  todos: HouseModelsCombiner[],
  filter: Filter
): HouseModelsCombiner[] {
  if (
    !filter.blockNumber &&
    !filter.landNumber &&
    !filter.maxPrice &&
    !filter.minPrice
  ) {
    return todos;
  }
  const filtesr = todos.filter((item: HouseModelsCombiner) =>
    filterDeeper(item, filter)
  );
  console.log(filtesr);
  return filtesr;
}

function filterDeeper(item: HouseModelsCombiner, filter: Filter) {
  const result = item.houses.filter((x) => {
    if (filter.blockNumber) {
      return x.attributes.block_number === filter.blockNumber;
    } else if (filter.blockNumber && filter.landNumber) {
      return (
        x.attributes.block_number === filter.blockNumber &&
        x.attributes.land_number === filter.landNumber 
      );
    }
    return x;
  });
  if (result.length) {
    return true;
  }
  return false;
}
