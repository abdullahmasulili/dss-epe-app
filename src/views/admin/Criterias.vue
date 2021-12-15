<template>
  <v-row no-gutters>
    <v-col class="ma-5">
      <v-card rounded="lg">
        <v-card-title>Manage Criterias</v-card-title>
        <v-card-text>
          <v-tabs grow color="indigo accent-2">
            <v-tab>
              <v-icon left>mdi-clipboard-list</v-icon>
              Criteria Lists
            </v-tab>
            <v-tab>
              <v-icon left>mdi-clipboard-plus</v-icon>
              Add Criteria
            </v-tab>
            <v-tab-item class="mx-3">
              <br />
              <v-alert
                elevation="2"
                border="left"
                color="indigo accent-2"
                colored-border
                v-for="(criteria, i) in allCriterias.data" :key="i"
              >
                <v-row>
                  <v-col>
                    <v-row no-gutters>
                      <h3>Kriteria</h3>
                    </v-row>
                    <br />
                    <v-row no-gutters>
                      <p class="text-capitalize">
                        {{criteria.criteria}}
                      </p>
                    </v-row>
                  </v-col>
                  <v-col>
                    <v-row no-gutters>
                      <h3>Pertanyaan</h3>
                    </v-row>
                    <br />
                    <v-row no-gutters>
                      <p class="text-capitalize">
                        {{criteria.question}}
                      </p>
                    </v-row>
                  </v-col>
                  <v-col>
                    <v-row no-gutters>
                      <h3>Bobot</h3>
                    </v-row>
                    <br />
                    <v-row no-gutters>
                      <p>{{criteria.weight}}</p>
                    </v-row>
                  </v-col>
                  <v-col>
                    <v-row no-gutters class="d-flex justify-center">
                      <h3>Actions</h3>
                    </v-row>
                    <br />
                    <v-row no-gutters>
                      <v-col>
                        <v-btn block depressed large color="accent">
                          <v-icon left>mdi-pencil</v-icon>
                          Edit
                        </v-btn>
                        <br />
                        <v-btn block text large color="error">
                          <v-icon left>mdi-trash-can</v-icon>
                          Delete
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-alert>

              <v-pagination v-model="allCriterias.current_page" :length="allCriterias.last_page" total-visible="7" @input="handleChange"></v-pagination>
            </v-tab-item>

            <v-tab-item>
              <br />
              <v-card outlined>
                <v-card-text>
                  <v-autocomplete
                    outlined
                    label="Kriteria"
                    color="indigo"
                    :items="allVariants"
                  ></v-autocomplete>
                  <v-textarea
                    outlined
                    label="Pertanyaan"
                    color="indigo"
                  ></v-textarea>
                  <v-text-field
                    outlined
                    label="Bobot"
                    color="indigo"
                  ></v-text-field>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn large depressed color="primary" width="150">
                    Save
                    <v-icon right>mdi-content-save</v-icon>
                  </v-btn>
                  <v-btn large outlined color="accent" width="150">
                    Reset
                    <v-icon right>mdi-reload</v-icon>
                  </v-btn>
                  <v-btn large text color="error" width="150">
                    Delete
                    <v-icon right>mdi-trash-can</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-tab-item>
          </v-tabs>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import axios from 'axios'
export default {
  data() {
    return {
      paginateData: this.$store.state.criterias.data,
      
    };
  },
  methods: {
    ...mapActions(['fetchCriterias', 'fetchVariants']),
    async handleChange(value){
      let response = await axios.get(`http://127.0.0.1:8000/api/criterias?page=${value}`)
      this.$store.commit('setCriterias', response.data);
    }
  },
  computed: {
    ...mapGetters(['allCriterias', 'allVariants']),
  },
  created(){
    this.fetchCriterias(),
    this.fetchVariants()
  },
};
</script>