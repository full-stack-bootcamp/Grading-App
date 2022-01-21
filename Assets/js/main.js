function getStudents(){
    const studentsAsString = localStorage.getItem('students');
    const students = JSON.parse(studentsAsString);
    
    return students;
}
const content = {
    data(){
        return{
            id : '',
            name : '',
            grade: '',

            isAdding : false,

            students : getStudents(),
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
            
            const studentsAsString = JSON.stringify(this.students);
            localStorage.setItem('students', studentsAsString)

            const array = localStorage.setItem('students');
            JSON.parse(array);
        }
    }
}

const app = Vue.createApp(content);
app.mount('.app');