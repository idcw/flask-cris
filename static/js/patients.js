
const PatientForm = {
    template: `
        <form>
          <div class="form-group">
            <label for="cris_code">Name</label>
            <input v-model="message" type="text" class="form-control" id="cris_code" placeholder="Enter email">
          </div>
          <div class="form-group">
            <label for="cris_code">Surname</label>
            <input v-model="message" type="text" class="form-control" id="cris_code" placeholder="Enter email">
          </div>
          <div class="form-group">
            <label for="cris_code">Hospital No</label>
            <input v-model="message" type="text" class="form-control" id="cris_code" placeholder="Enter email">
          </div>
          <div class="form-group">
            <label for="cris_code">Date of Birth</label>
            <input v-model="message" type="text" class="form-control" id="cris_code" placeholder="Enter email">
          </div>
          <div class="form-group">
            <label for="cris_code">Diagnosis</label>
            <input v-model="message" type="text" class="form-control" id="cris_code" placeholder="Enter email">
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    `,
    data: function () {
            return {
                message: null
            }
    },
    methods: {

    }
}

const PatientTable = {
    template: `
    <div>
        Table
    </div>
    `,
    data: function () {
        return {
            message: null
        }

    },
    methods: {

    }
}

const PatientDetails = {
    template: ``,
    data: function () {

    },
    methods: {
        
    }
}

const Patients = {
    template: `
        <div>
            <AppHeader></AppHeader>
            <div>
                <PatientForm></PatientForm>
            </div> 
            <div>
                <PatientTable></PatientTable>
            </div> 
        </div>   
    `,
    components: {
        'AppHeader': AppHeader,
        'PatientForm': PatientForm,
        'PatientTable': PatientTable
    }
};

