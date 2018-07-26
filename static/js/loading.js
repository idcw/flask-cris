const CvsImport = {
    template: `
      <div>
          <div class="container">
            <div class="large-12 medium-12 small-12 cell">
              <label>File
                <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
              </label>
              <button v-on:click="submitFile()">Submit</button>
            </div>
          </div>
          <div>{{ this.fields }} : {{ this.file }}</div>
      </div>`,
    props: {
        parsed: {
            twoWay: true
        },
        fields: Array,
        file: String
    },
    computed: {
    },
    /*
      Defines the data used by the component
    */
    data(){
      return {
        file: ''
      }
    },

    methods: {
      /*
        Submits the file to the server
      */
      submitFile () {
            let formData = new FormData();
            formData.append('file', this.file);

            axios.post( '/api/upload',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then(function(response){
                    console.log(response);
                    this.file = response.data.name;
                    this.fields = response.data.shape;
                })
                .catch(function(){
                    console.log('FAILURE!!');
                });
      },
      /*
        Handles a change on the file upload
      */
      handleFileUpload(){
        this.file = this.$refs.file.files[0];
      }
    }
};

const Loading = {
    template: `
        <div>
            <AppHeader></AppHeader>
            <CvsImport></CvsImport>
        </div>
    `,
    components: {
        'CvsImport': CvsImport,
        'AppHeader': AppHeader
    },
    data: function() {
        return {
            dataRows: 0
        }
    },
    created: function() {

    },
    methods: {
        onMounted() {

        },
    }
};
