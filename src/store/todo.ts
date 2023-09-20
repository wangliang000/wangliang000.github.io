import { TodoStatus, TodoType } from "@/types/todo";
import Store from "./indexdb";
import { MAX_NUM, MIN_NUM } from "@/components/Range";


class TodoStore extends Store<TodoType>{
  constructor(name, version, options) {
    super(name, version, options);
  }
  updateProcess(id: number, data: Pick<TodoType, 'process'>) {
    const { process } = data;
    let status: `${TodoStatus}` = TodoStatus.PNEDING;
    if (process >= MAX_NUM) {
      status = TodoStatus.SUCCESS;
    } else if (process > MIN_NUM) {
      status = TodoStatus.ONGOING;
    }

    this.update(id, { ...data, status })
  }
}
export default new TodoStore('todoList', 1, {
  items: '++id,title,createGMT,process,status'
})