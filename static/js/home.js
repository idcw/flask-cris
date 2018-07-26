const ShowData = {
    template: `
        <div>
            <h4>Dashboard</h4>
        </div>
    `,
    data: function() {
        return {
            dataRows: 0,
            startDate: 0,
            endDate: 0,
            users: []
        }
    },
    created() {

    },
    props: {

    },
    computed: {

    },
    methods: {
    },
    watch: {

    }
};

const Home = {
    template:`
        <div>
            <AppHeader></AppHeader>
            <ShowData></ShowData>
        </div>
    `,
    components: {
        'ShowData': ShowData,
        'AppHeader': AppHeader
    },
    data: function() {
        return {
        }
    },
    methods: {

    }
};
