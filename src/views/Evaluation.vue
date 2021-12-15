<template>
  <v-row no-gutters class="fill-height">
    <v-col class="ma-5">
      <v-card rounded="lg">
        <v-card-text>
          <v-tabs grow>
            <v-tab><v-icon>mdi-account</v-icon></v-tab>
            <v-tab><v-icon>mdi-account-group</v-icon></v-tab>
            <v-tab><v-icon>mdi-account-hard-hat</v-icon></v-tab>

            <v-tab-item>
              <v-card>
                <v-card-title> Penilaian Individu </v-card-title>
                <v-card-text>
                  <v-row>
                    <v-col cols="12" md="9">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perspiciatis deleniti temporibus quae dignissimos
                        obcaecati amet excepturi esse, delectus quidem dolore a
                        labore, consequuntur pariatur explicabo totam nesciunt
                        cumque nihil tempore?
                      </p>
                    </v-col>
                    <v-col cols="12" md="3" class="d-flex justify-center">
                      <v-autocomplete
                        outlined
                        :items="answer"
                        label="Jawaban"
                      ></v-autocomplete>
                    </v-col>
                  </v-row>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn large color="primary">
                    Simpan
                    <v-icon right>mdi-content-save</v-icon>
                  </v-btn>
                  <v-btn large text color="accent">
                    Ubah
                    <v-icon right>mdi-pencil</v-icon>
                  </v-btn>
                  <v-btn large text color="secondary">
                    Reset
                    <v-icon right>mdi-reload</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card>
                <v-card-title>
                  Penilaian Rekan Sejawat
                  <v-spacer></v-spacer>
                  <v-autocomplete
                    outlined
                    label="Pilih Pegawai"
                  ></v-autocomplete>
                </v-card-title>
                <v-card-text>
                  <v-row>
                    <v-col cols="12" md="9">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perspiciatis deleniti temporibus quae dignissimos
                        obcaecati amet excepturi esse, delectus quidem dolore a
                        labore, consequuntur pariatur explicabo totam nesciunt
                        cumque nihil tempore?
                      </p>
                    </v-col>
                    <v-col cols="12" md="3" class="d-flex justify-center">
                      <v-autocomplete
                        outlined
                        :items="answer"
                        label="Jawaban"
                      ></v-autocomplete>
                    </v-col>
                  </v-row>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn large color="primary">
                    Simpan
                    <v-icon right>mdi-content-save</v-icon>
                  </v-btn>
                  <v-btn large text color="accent">
                    Ubah
                    <v-icon right>mdi-pencil</v-icon>
                  </v-btn>
                  <v-btn large text color="secondary">
                    Reset
                    <v-icon right>mdi-reload</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card>
                <v-card-title>
                  Penilaian Bawahan
                  <v-spacer></v-spacer>
                  <v-autocomplete
                    outlined
                    label="Pilih Pegawai"
                  ></v-autocomplete>
                </v-card-title>
                <v-card-text>
                  <v-row>
                    <v-col cols="12" md="9">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perspiciatis deleniti temporibus quae dignissimos
                        obcaecati amet excepturi esse, delectus quidem dolore a
                        labore, consequuntur pariatur explicabo totam nesciunt
                        cumque nihil tempore?
                      </p>
                    </v-col>
                    <v-col cols="12" md="3" class="d-flex justify-center">
                      <v-autocomplete
                        outlined
                        :items="answer"
                        label="Jawaban"
                      ></v-autocomplete>
                    </v-col>
                  </v-row>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn large color="primary">
                    Simpan
                    <v-icon right>mdi-content-save</v-icon>
                  </v-btn>
                  <v-btn large text color="accent">
                    Ubah
                    <v-icon right>mdi-pencil</v-icon>
                  </v-btn>
                  <v-btn large text color="secondary">
                    Reset
                    <v-icon right>mdi-reload</v-icon>
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
export default {
  name: "evaluation",
  data() {
    return {
      answer: [
        "Sangat Tidak Setuju",
        "Tidak Setuju",
        "Setuju",
        "Sangat Setuju",
      ],
    };
  },
  methods: {},
  computed: {},
};
</script>