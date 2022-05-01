import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoryController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const categoriesRepository = null;
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
const listCategoriesController = new ListCategoryController(
  listCategoriesUseCase
);

export { listCategoriesController };
