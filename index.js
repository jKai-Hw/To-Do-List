class ToDoList {
    constructor(text, num) {
        this.text = text;
        this.num = num;
    }
}

class View {

    static createNoListMessage() {
        let container = document.createElement("div");
        container.classList.add("w-50", "my-1");

        container.innerHTML = `
        <h5>まだ TODO リストがありません</h5>
        `

        return container;
    }
}

var app = new Vue ({
    el: '#app',
    data() {
        return{
            toDoList: [],
            input: "",
            num: 0,
        };
    },
    computed: {
    canCreateBtn: function () {
        if (this.input == "") return true;
        else return false;
    }
    },
    methods: {
        createBtn: function () {
            this.num++;
            let todo = new ToDoList(this.input, this.num);
            this.toDoList.push(todo);
            this.input = "";
            console.log(this.toDoList)
        },
        deleteBtn: function (i) {
        console.log("🚀 ~ file: index.js ~ line 40 ~ i", i)
            this.toDoList.splice(i, 1);
        },
        isListEmpty: function () {
            if (this.toDoList.length == 0) return true;
            else return false;
        },
    }
})
