

const BarChart = {
    template: `
        <form>
            <label><input type="radio" name="mode" value="grouped"> Grouped</label>
            <label><input type="radio" name="mode" value="stacked" checked> Stacked</label>
        </form>
        <svg width="960" height="500"></svg>
    `,
    data: function() {

    },
    methods: {       

    }

}

const WorkLoad = {
    template: `
        <div>
            <div>SELECT
                <div>Users:
                    <div>
                        <div v-for="user in users" class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" v-bind:id="user.ReportedBy" v-model="selectedUsers" v-bind:value="user.ReportedBy">
                            <label class="form-check-label" v-bind:for="user.ReportedBy">{{ user.ReportedBy }}</label>
                        </div>
                    </div>
                </div>
                <div>Modalities:
                    <div>
                        <div v-for="modality in modalities" class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" v-bind:id="modality.Modality" v-model="selectedModlities" v-bind:value="modality.Modality">
                            <label class="form-check-label" v-bind:for="modality.Modality">{{ modality.Modality }}</label>
                        </div>
                    </div>
                </div>
                <div><button @click.prevent="onShow">Show</button></div>
            </div>
            Graph with the selected time / reporters / modalities

        </div>
    `,
    components: {
    },
    data: function() {
        return {
            users: [],
            selectedUsers: [],
            modalities: [],
            selectedModlities: []
        }
    },
    mounted() {

    },

    methods: {
        onShow() {
            this.getSumData()
        },

        getData() {

        },
        getSumData() {

        },
        getStartTimes() {

        },
        getEndTimes() {

        },
        getVerifiedTimes() {

        }

    }
};

const Analysis = {
    template: `
        <div>
            <AppHeader></AppHeader>
            <div><WorkLoad></WorkLoad></div> 
        </div>   
    `,
    components: {
        'WorkLoad': WorkLoad,
        'AppHeader': AppHeader
    }
};

