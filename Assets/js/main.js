const content = {
    data(){
        return{
            id : '',
            name : '',
            grade: '',

            isAdding : false,

            students : [],
        };
    },

    methods:{
        saveData(){
            this.students.push({
                id: this.students.length+1,
                name: this.name,
                grade: this.grade,
            });
            this.id = '';
            this.name = '';
            this.grade = '';
            this.isAdding = false;
        }
    }
}

const app = Vue.createApp(content);
app.mount('.app');