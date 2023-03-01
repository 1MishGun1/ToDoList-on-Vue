Vue.createApp ({
    data() {
        return {
            valueInput: "",
            needDoList: [],
            completeList: []
        };
    },
    
    methods: {
        handlyInput(event) {
            this.valueInput = event.target.value;
        },

        addTask () {
            if(this.valueInput === "") {return};
            this.needDoList.push({
                title: this.valueInput,
                id: Math.random()
            });
            this.valueInput = "";
        },

        doCheck (index, type) {
            if(type === "need") {
                let completeMask = this.needDoList.splice(index, 1);
                this.completeList.push(...completeMask);
            }
            else {
                let notCompleteMask = this.completeList.splice(index, 1);
                this.needDoList.push(...notCompleteMask);
            }
        },

        deleteMask(index, type) {
            let planer = type === 'need' ? this.needDoList : this.completeList;
            planer.splice(index, 1);
        }
    }
}).mount('#app');