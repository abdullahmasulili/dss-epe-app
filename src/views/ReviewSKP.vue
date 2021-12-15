<template>
  <v-row class="ma-3">
    <v-col>
      <v-card>
        <v-card-title>
          <v-col>
            <v-row>
              <v-col> </v-col>
            </v-row>
          </v-col>
        </v-card-title>
        <v-card-text>
          <v-stepper v-model="e1" outlined>
            <v-stepper-header>
              <v-stepper-step :complete="e1 > 1" step="1">
                Pejabat yang Menilai
              </v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step :complete="e1 > 2" step="2">
                Pegawai yang Dinilai
              </v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step :complete="e1 > 3" step="3">
                Periode Penilaian
              </v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step :complete="e1 > 4" step="4">
                Kinerja Utama
              </v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step step="5"> Kinerja Tambahan </v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
              <v-stepper-content step="1">
                <br />
                <v-autocomplete
                  :items="s_pejabat"
                  v-model="sm_pejabat"
                  @change="show_d_pejabat"
                  clearable
                  outlined
                  label="Pilih Pejabat"
                ></v-autocomplete>
                <br />
                <v-card color="deep-purple accent-1" dark v-if="sm_pejabat !== null">
                  <v-card-subtitle>Detail</v-card-subtitle>
                  <v-card-text>
                    <v-row v-for="(_pejabat, i) in d_pejabat" :key="i">
                      <v-col cols="12" md="6" lg="9" xl="9">
                        <v-row>
                          <v-col>
                            <p class="font-weight-bold">Nama</p>
                            <br />
                            <p>{{ d_pejabat[i].name }}</p>
                          </v-col>
                          <v-col>
                            <p class="font-weight-bold">NIP</p>
                            <br />
                            <p>{{ d_pejabat[i].nip }}</p>
                          </v-col>
                          <v-col>
                            <p class="font-weight-bold">Pangkat/Gol. Ruang</p>
                            <br />
                            <p>{{ d_pejabat[i].pangkat }}</p>
                          </v-col>
                          <v-col>
                            <p class="font-weight-bold">Jabatan</p>
                            <br />
                            <p>{{ d_pejabat[i].jabatan }}</p>
                          </v-col>
                          <v-col>
                            <p class="font-weight-bold">Unit Kerja</p>
                            <br />
                            <p>{{ d_pejabat[i].unit_kerja }}</p>
                          </v-col>
                        </v-row>
                      </v-col>
                      <v-col
                        cols="12"
                        md="6"
                        lg="3"
                        xl="3"
                        class="d-flex justify-center"
                      >
                        <v-avatar size="200" rounded="lg">
                          <v-img
                            class="rounded-lg"
                            contain
                            :src="d_pejabat[i].photo"
                          ></v-img>
                        </v-avatar>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
                <v-card-actions class="mt-3">
                  <v-spacer></v-spacer>
                  <v-btn
                    large
                    width="150"
                    depressed
                    color="primary"
                    @click="e1 = sm_pejabat !== null ? (e1 = 2) : (e1 = 1)"
                  >
                    Continue
                    <v-icon right>mdi-chevron-right</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-stepper-content>

              <v-stepper-content step="2">
                <v-card outlined>
                  <v-card-text>
                    <v-autocomplete
                      outlined
                      label="Pilih Pegawai"
                    ></v-autocomplete>
                    <v-card dark color="deep-purple accent-1">
                      <v-card-subtitle class="font-weight-black white--text"
                        >Detail Pegawai</v-card-subtitle
                      >
                      <v-card-text>
                        <v-row>
                          <v-col>
                            <p class="font-weight-bold white--text">Nama</p>
                          </v-col>
                          <v-col>
                            <p class="font-weight-bold white--text">NIP</p>
                          </v-col>
                          <v-col>
                            <p class="font-weight-bold white--text">
                              Pangkat/Golongan
                            </p>
                          </v-col>
                          <v-col>
                            <p class="font-weight-bold white--text">Jabatan</p>
                          </v-col>
                          <v-col>
                            <p class="font-weight-bold white--text">Instansi</p>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col>
                            <p class="white--text">Abdullah Masulili S.Kom</p>
                          </v-col>
                          <v-col>
                            <p class="white--text">5576326563747</p>
                          </v-col>
                          <v-col>
                            <p class="white--text">Eselon IV</p>
                          </v-col>
                          <v-col>
                            <p class="white--text">IT Staff</p>
                          </v-col>
                          <v-col>
                            <p class="white--text">
                              Balai Pelaksanaan Jalan Nasional XIV Palu
                            </p>
                          </v-col>
                        </v-row>
                      </v-card-text>
                    </v-card>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      text
                      large
                      width="150"
                      class="ml-2"
                      @click="e1 = e1 - 1"
                    >
                      <v-icon>mdi-chevron-left</v-icon>
                      Back
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn
                      depressed
                      large
                      width="150"
                      color="primary"
                      class="mr-2"
                      @click="e1 = e1 + 1"
                      dark
                    >
                      Continue
                      <v-icon>mdi-chevron-right</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-stepper-content>
              <v-stepper-content step="3">
                <v-card outlined>
                  <v-card-text>
                    <v-row>
                      <v-col
                        cols="12"
                        md="3"
                        lg="3"
                        xl="3"
                        class="d-flex justify-center"
                      >
                        <h2 class="mt-4">Periode Penilaian</h2>
                      </v-col>
                      <v-col>
                        <v-menu
                          ref="date_from"
                          :close-on-content-click="false"
                          :return-value.sync="date_from"
                          transition="slide-x-transition"
                          v-model="menu_from"
                          offset-y
                          min-width="auto"
                        >
                          <template v-slot:activator="{ attrs, on }">
                            <v-text-field
                              outlined
                              readonly
                              v-bind="attrs"
                              v-on="on"
                              label="Dari"
                              append-icon="mdi-calendar"
                              v-model="date_from"
                            ></v-text-field>
                          </template>
                          <v-date-picker
                            no-title
                            scrollable
                            v-model="date_from"
                          >
                            <v-spacer></v-spacer>
                            <v-btn
                              icon
                              color="secondary"
                              @click="menu_from = !menu_from"
                            >
                              <v-icon>mdi-close</v-icon>
                            </v-btn>
                            <v-btn
                              icon
                              color="primary"
                              @click="$refs.date_from.save(date_from)"
                            >
                              <v-icon>mdi-check</v-icon>
                            </v-btn>
                          </v-date-picker>
                        </v-menu>
                      </v-col>
                      <v-col>
                        <v-menu
                          ref="date_to"
                          :close-on-content-click="false"
                          :return-value.sync="date_to"
                          transition="slide-x-transition"
                          v-model="menu_to"
                          offset-y
                          min-width="auto"
                        >
                          <template v-slot:activator="{ attrs, on }">
                            <v-text-field
                              outlined
                              readonly
                              v-bind="attrs"
                              v-on="on"
                              label="Sampai"
                              append-icon="mdi-calendar"
                              v-model="date_to"
                            ></v-text-field>
                          </template>
                          <v-date-picker no-title scrollable v-model="date_to">
                            <v-spacer></v-spacer>
                            <v-btn
                              icon
                              color="secondary"
                              @click="menu_to = !menu_to"
                            >
                              <v-icon>mdi-close</v-icon>
                            </v-btn>
                            <v-btn
                              icon
                              color="primary"
                              @click="$refs.date_to.save(date_to)"
                            >
                              <v-icon>mdi-check</v-icon>
                            </v-btn>
                          </v-date-picker>
                        </v-menu>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
                <v-card-actions>
                  <v-btn large text @click="e1 = e1 - 1">
                    <v-icon left>mdi-chevron-left</v-icon>
                    Back
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn large color="primary" width="150" @click="e1 = e1 + 1">
                    Continue
                    <v-icon right>mdi-chevron-right</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-stepper-content>

              <v-stepper-content step="4">
                <v-row>
                  <v-col>
                    <v-card outlined>
                      <v-card-title>Uraian 1</v-card-title>
                      <v-card-text>
                        <v-row>
                          <v-col>
                            <v-alert
                              border="bottom"
                              elevation="2"
                              color="indigo accent-2"
                              colored-border
                            >
                              <p class="font-weight-bold text-center">
                                Rencana Kinerja 1
                              </p>
                              <p class="text-center">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Sit modi, consectetur in illo
                                possimus aperiam fugit. Nemo alias perspiciatis
                                consequatur tenetur totam, neque possimus?
                                Asperiores optio suscipit obcaecati perferendis
                                voluptate?
                              </p>
                            </v-alert>
                          </v-col>
                          <v-col>
                            <v-alert
                              border="bottom"
                              elevation="1"
                              color="indigo accent-2"
                              colored-border
                            >
                              <p class="font-weight-bold text-center">
                                Indikator Kinerja Individu
                              </p>
                              <p class="text-center">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Debitis a, tempora laudantium
                                numquam impedit dolores aperiam ut soluta eos
                                eius atque minus nesciunt. Atque velit magnam,
                                vel accusantium nulla dolore!
                              </p>
                            </v-alert>
                            <v-alert
                              border="bottom"
                              elevation="1"
                              color="indigo accent-2"
                              colored-border
                            >
                              <p class="font-weight-bold text-center">
                                Indikator Kinerja Individu
                              </p>
                              <p class="text-center">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Debitis a, tempora laudantium
                                numquam impedit dolores aperiam ut soluta eos
                                eius atque minus nesciunt. Atque velit magnam,
                                vel accusantium nulla dolore!
                              </p>
                            </v-alert>
                          </v-col>
                          <v-col>
                            <v-alert
                              border="bottom"
                              elevation="2"
                              color="indigo accent-2"
                              colored-border
                            >
                              <p class="font-weight-bold text-center">Target</p>
                              <p class="text-center">5 Bulan</p>
                            </v-alert>
                            <v-alert
                              border="bottom"
                              elevation="2"
                              color="indigo accent-2"
                              colored-border
                            >
                              <p class="font-weight-bold text-center">Target</p>
                              <p class="text-center">5 Bulan</p>
                            </v-alert>
                          </v-col>
                          <v-col>
                            <v-text-field
                              outlined
                              label="Realisasi"
                            ></v-text-field>
                            <v-text-field
                              outlined
                              label="Capaian IKI"
                            ></v-text-field>
                            <v-text-field
                              outlined
                              label="Kategori Capaian IKI"
                            ></v-text-field>
                            <v-text-field
                              outlined
                              label="Nilai Capaian IKI"
                            ></v-text-field>
                            <v-text-field
                              outlined
                              label="Nilai Tertimbang"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                      </v-card-text>
                      <v-card-actions> </v-card-actions>
                    </v-card>
                  </v-col>
                </v-row>
                <v-card-actions>
                  <v-btn text large @click="e1 = e1 !== 1 ? e1 - 1 : (e1 = 1)">
                    <v-icon left>mdi-chevron-left</v-icon>
                    Back
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="primary"
                    width="150"
                    depressed
                    large
                    @click="e1 = e1 + 1"
                  >
                    Continue
                    <v-icon right>mdi-chevron-right</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-stepper-content>

              <v-stepper-content step="5">
                <v-card outlined>
                  <v-col>
                    <v-row no-gutters class="d-flex justify-center">
                      <v-avatar color="accent" size="64">
                        <v-icon color="white">mdi-information-variant</v-icon>
                      </v-avatar>
                    </v-row>
                    <br />
                    <v-row no-gutters class="d-flex justify-center">
                      <h2 class="text-center blue-grey--text">
                        Tidak Ada Rencana Kinerja Tambahan
                      </h2>
                    </v-row>
                    <br />
                  </v-col>
                </v-card>
                <v-card-actions>
                  <v-btn text large @click="e1 = e1 !== 1 ? e1 - 1 : (e1 = 1)">
                    <v-icon left>mdi-chevron-left</v-icon>
                    Back
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn large width="150" color="primary">
                    Simpan
                    <v-icon right>mdi-content-save</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      date_from: null,
      menu_from: false,
      date_to: null,
      menu_to: false,
      e1: 1,
      s_pejabat: ["Mahindra Widyanata S.Kom., M.Kom"],
      sm_pejabat: null,
      d_pejabat: [],
    };
  },
  computed: {},
  methods: {
    show_d_pejabat() {
      var data = {
        name: "Mahindra Widyanata S.Kom., M.Kom",
        nip: "808869856867969068",
        pangkat: "Eselon IV",
        jabatan: "Kepala Balai",
        unit_kerja: "Departemen IT",
        photo:
          "https://themeselection.com/demo/materio-vuetify-vuejs-admin-template-free/demo/img/1.e2938115.png",
      };
      if (this.sm_pejabat === null) {
        this.d_pejabat = [];
      } else {
        this.d_pejabat.push(data);
      }
      console.log(this.d_pejabat);
    },
  },
};
</script>