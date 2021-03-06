import {Controller} from "../../src/decorator/controllers";
import {Get} from "../../src/decorator/methods";

@Controller()
export class BlogController {

    @Get("/blogs", { jsonResponse: true })
    getAll() {
        return [
            { id: 1, firstName: "First", secondName: "blog" },
            { id: 2, firstName: "Second", secondName: "blog" }
        ];
    }

    @Get("/blogs/:id")
    getOne() {
        return "THIS STRING will BE not SO BIG";
    }

}