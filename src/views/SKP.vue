<template>
  <v-col>
    <v-row no-gutters>
      <v-col>
        <v-card>
          <v-card-text>
            <v-tabs grow color="indigo accent-2">
              <v-tab>Daftar SKP</v-tab>
              <v-tab>Buat SKP</v-tab>

              <!-- item tab daftar skp -->
              <v-tab-item>
                <br />
                <v-card outlined>
                  <v-card-text>
                    <h3>Pilih Periode</h3>
                    <br />
                    <v-row>
                      <v-col>
                        <v-menu
                          ref="menu_from"
                          v-model="picker.menu_from"
                          :close-on-content-click="false"
                          :return-value.sync="picker.date_from"
                          transition="slide-x-transition"
                          offset-y
                          min-width="auto"
                        >
                          <template v-slot:activator="{ attrs, on }">
                            <v-text-field
                              outlined
                              readonly
                              v-model="picker.date_from"
                              append-icon="mdi-calendar"
                              label="Dari"
                              v-bind="attrs"
                              v-on="on"
                            ></v-text-field>
                          </template>
                          <v-date-picker
                            no-title
                            v-model="picker.date_from"
                            @change="$refs.menu_from.save(picker.date_from)"
                          ></v-date-picker>
                        </v-menu>
                      </v-col>
                      <v-col>
                        <v-menu
                          ref="menu_to"
                          v-model="picker.menu_to"
                          :close-on-content-click="false"
                          :return-value.sync="picker.date_to"
                          transition="slide-x-transition"
                          offset-y
                          min-width="auto"
                        >
                          <template v-slot:activator="{ attrs, on }">
                            <v-text-field
                              outlined
                              readonly
                              v-model="picker.date_to"
                              append-icon="mdi-calendar"
                              label="Sampai"
                              v-bind="attrs"
                              v-on="on"
                            ></v-text-field>
                          </template>
                          <v-date-picker
                            no-title
                            v-model="picker.date_to"
                            @change="$refs.menu_to.save(picker.date_to)"
                          ></v-date-picker>
                        </v-menu>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <v-card outlined>
                          <v-card-title>
                            <h3 class="text-uppercase blue-grey--text">
                              Pejabat Penilai: Abdullah Masulili S.Kom
                            </h3>
                          </v-card-title>
                          <v-divider></v-divider>
                          <v-card-text>
                            <v-row no-gutters>
                              <v-col>
                                <h3 class="text-uppercase grey--text">
                                  KINERJA UTAMA
                                </h3>
                                <br />
                                <v-card color="indigo accent-1" dark>
                                  <v-card-subtitle>
                                    <v-row no-gutters>
                                      <h2 class="white--text mt-3">
                                        Uraian Tugas 1
                                      </h2>
                                      <v-spacer></v-spacer>
                                      <v-btn
                                        large
                                        width="150"
                                        depressed
                                        color="white"
                                        light
                                      >
                                        Edit
                                        <v-icon right>mdi-pencil</v-icon>
                                      </v-btn>
                                      <v-btn
                                        large
                                        width="150"
                                        text
                                        color="amber lighten-1"
                                        class="ml-3"
                                      >
                                        Delete
                                        <v-icon right>mdi-trash-can</v-icon>
                                      </v-btn>
                                    </v-row>
                                  </v-card-subtitle>
                                  <v-card-text>
                                    <v-row>
                                      <v-col>
                                        <p class="font-weight-bold white--text">
                                          Rencana Kinerja 1
                                        </p>
                                      </v-col>
                                      <v-col>
                                        <p class="font-weight-bold white--text">
                                          Indikator Kinerja Individu (IKI) 1.1
                                        </p>
                                      </v-col>
                                      <v-col>
                                        <p class="font-weight-bold white--text">
                                          Aspek 1.1
                                        </p>
                                      </v-col>
                                      <v-col>
                                        <p class="font-weight-bold white--text">
                                          Target 1.1
                                        </p>
                                      </v-col>
                                    </v-row>
                                    <v-row>
                                      <v-col>
                                        <p class="white--text">
                                          Lorem ipsum dolor sit amet consectetur
                                          adipisicing elit. Voluptatum laborum
                                          eligendi saepe ipsum totam placeat
                                          doloremque, sunt nemo cupiditate error
                                          laudantium, eius ab non cum minima
                                          nisi possimus beatae facere?
                                        </p>
                                      </v-col>
                                      <v-col>
                                        <p class="white--text">
                                          Lorem ipsum dolor sit amet consectetur
                                          adipisicing elit. Voluptatum laborum
                                          eligendi saepe ipsum totam placeat
                                          doloremque, sunt nemo cupiditate error
                                          laudantium, eius ab non cum minima
                                          nisi possimus beatae facere?
                                        </p>
                                        <p class="white--text">
                                          Lorem ipsum dolor sit amet consectetur
                                          adipisicing elit. Voluptatum laborum
                                          eligendi saepe ipsum totam placeat
                                          doloremque, sunt nemo cupiditate error
                                          laudantium, eius ab non cum minima
                                          nisi possimus beatae facere?
                                        </p>
                                      </v-col>
                                      <v-col>
                                        <p class="white--text">
                                          Lorem ipsum dolor sit amet consectetur
                                          adipisicing elit. Voluptatum laborum
                                          eligendi saepe ipsum totam placeat
                                          doloremque, sunt nemo cupiditate error
                                          laudantium, eius ab non cum minima
                                          nisi possimus beatae facere?
                                        </p>
                                      </v-col>
                                      <v-col>
                                        <p class="white--text">
                                          Lorem ipsum dolor sit amet consectetur
                                          adipisicing elit. Voluptatum laborum
                                          eligendi saepe ipsum totam placeat
                                          doloremque, sunt nemo cupiditate error
                                          laudantium, eius ab non cum minima
                                          nisi possimus beatae facere?
                                        </p>
                                      </v-col>
                                    </v-row>
                                  </v-card-text>
                                </v-card>
                                <br />
                                <v-alert color="amber accent-4" outlined>
                                  <v-col>
                                    <v-row
                                      class="flex flex-column justify-center"
                                    >
                                      <v-icon large color="amber accent-4"
                                        >mdi-alert</v-icon
                                      >
                                    </v-row>

                                    <v-row class="flex-column justify-center">
                                      <br />
                                      <h3 class="text-center">
                                        Tidak Ada Tugas
                                      </h3>
                                      <p class="text-center">
                                        Silahkan Buat Rencana Sasaran Kinerja
                                        Pegawai Terlebih Dahulu
                                      </p>
                                    </v-row>
                                  </v-col>
                                </v-alert>
                              </v-col>
                            </v-row>
                            <br />
                            <v-divider></v-divider>
                            <br />
                            <v-row no-gutters>
                              <v-col>
                                <h3 class="text-uppercase grey--text">
                                  KINERJA TAMBAHAN
                                </h3>
                                <br />
                                <v-card color="indigo accent-1" dark>
                                  <v-card-subtitle>
                                    <v-row no-gutters>
                                      <h2 class="white--text mt-3">
                                        Uraian Tugas 1
                                      </h2>
                                      <v-spacer></v-spacer>
                                      <v-btn
                                        large
                                        width="150"
                                        depressed
                                        color="white"
                                        light
                                      >
                                        Edit
                                        <v-icon right>mdi-pencil</v-icon>
                                      </v-btn>
                                      <v-btn
                                        large
                                        width="150"
                                        text
                                        color="amber lighten-1"
                                        class="ml-3"
                                      >
                                        Delete
                                        <v-icon right>mdi-trash-can</v-icon>
                                      </v-btn>
                                    </v-row>
                                  </v-card-subtitle>
                                  <v-card-text>
                                    <v-row>
                                      <v-col>
                                        <p class="font-weight-bold white--text">
                                          Rencana Kinerja 1
                                        </p>
                                      </v-col>
                                      <v-col>
                                        <p class="font-weight-bold white--text">
                                          Indikator Kinerja Individu (IKI) 1.1
                                        </p>
                                      </v-col>
                                      <v-col>
                                        <p class="font-weight-bold white--text">
                                          Aspek 1.1
                                        </p>
                                      </v-col>
                                      <v-col>
                                        <p class="font-weight-bold white--text">
                                          Target 1.1
                                        </p>
                                      </v-col>
                                    </v-row>
                                    <v-row>
                                      <v-col>
                                        <p class="white--text">
                                          Lorem ipsum dolor sit amet consectetur
                                          adipisicing elit. Voluptatum laborum
                                          eligendi saepe ipsum totam placeat
                                          doloremque, sunt nemo cupiditate error
                                          laudantium, eius ab non cum minima
                                          nisi possimus beatae facere?
                                        </p>
                                      </v-col>
                                      <v-col>
                                        <p class="white--text">
                                          Lorem ipsum dolor sit amet consectetur
                                          adipisicing elit. Voluptatum laborum
                                          eligendi saepe ipsum totam placeat
                                          doloremque, sunt nemo cupiditate error
                                          laudantium, eius ab non cum minima
                                          nisi possimus beatae facere?
                                        </p>
                                      </v-col>
                                      <v-col>
                                        <p class="white--text">
                                          Lorem ipsum dolor sit amet consectetur
                                          adipisicing elit. Voluptatum laborum
                                          eligendi saepe ipsum totam placeat
                                          doloremque, sunt nemo cupiditate error
                                          laudantium, eius ab non cum minima
                                          nisi possimus beatae facere?
                                        </p>
                                      </v-col>
                                      <v-col>
                                        <p class="white--text">
                                          Lorem ipsum dolor sit amet consectetur
                                          adipisicing elit. Voluptatum laborum
                                          eligendi saepe ipsum totam placeat
                                          doloremque, sunt nemo cupiditate error
                                          laudantium, eius ab non cum minima
                                          nisi possimus beatae facere?
                                        </p>
                                      </v-col>
                                    </v-row>
                                  </v-card-text>
                                </v-card>
                                <br />
                                <v-alert color="amber accent-4" outlined>
                                  <v-col>
                                    <v-row
                                      class="flex flex-column justify-center"
                                    >
                                      <v-icon large color="amber accent-4"
                                        >mdi-alert</v-icon
                                      >
                                    </v-row>

                                    <v-row class="flex-column justify-center">
                                      <br />
                                      <h3 class="text-center">
                                        TIDAK ADA TUGAS
                                      </h3>

                                      <p class="text-center">
                                        Silahkan Buat Rencana Sasaran Kinerja
                                        Pegawai Terlebih Dahulu
                                      </p>
                                    </v-row>
                                  </v-col>
                                </v-alert>
                              </v-col>
                            </v-row>
                          </v-card-text>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-tab-item>

              <!-- item tab buat skp -->
              <v-tab-item class="ma-3">
                <v-stepper v-model="stp" alt-labels>
                  <v-stepper-header>
                    <v-stepper-step :complete="stp > 1" step="1">
                      <p class="text-center">Pilih Pegawai/Pejabat</p>
                    </v-stepper-step>

                    <v-divider></v-divider>

                    <v-stepper-step step="2" :complete="stp > 2">
                      <p class="text-center">Pilih Periode</p>
                    </v-stepper-step>

                    <v-divider></v-divider>

                    <v-stepper-step step="3">
                      <p class="text-center">Buat Rencana SKP</p>
                    </v-stepper-step>
                  </v-stepper-header>

                  <v-stepper-items>
                    <v-stepper-content step="1">
                      <v-row class="mt-3">
                        <v-col cols="12" md="6" lg="6" xl="6">
                          <v-card outlined>
                            <v-card-title>Pegawai yang Dinilai</v-card-title>
                            <v-card-text>
                              <v-autocomplete
                                outlined
                                label="Pilih Pegawai"
                              ></v-autocomplete>
                              <v-card
                                color="deep-purple accent-1"
                                rounded="lg"
                                elevation="4"
                                dark
                              >
                                <v-card-text>
                                  <v-row>
                                    <v-col cols="12" md="3" lg="3" xl="3">
                                      <v-avatar rounded="lg" size="162">
                                        <v-img
                                          src="https://themeselection.com/demo/materio-vuetify-vuejs-admin-template-free/demo/img/1.e2938115.png"
                                        ></v-img>
                                      </v-avatar>
                                    </v-col>
                                    <v-col>
                                      <h2>Abdullah Masulili S.Kom</h2>
                                      <br />
                                      <v-row>
                                        <v-col>
                                          <h3 class="font-weight-bold">NIP</h3>
                                          <p class="font-weight-light">
                                            88686574890680
                                          </p>
                                          <br />
                                          <h3 class="font-weight-bold">
                                            Pangkat/Golongan
                                          </h3>
                                          <p class="font-weight-light">
                                            Eselon IV
                                          </p>
                                        </v-col>
                                        <v-col>
                                          <h3 class="font-weight-bold">
                                            Jabatan
                                          </h3>
                                          <p class="font-weight-light">
                                            Pejabat Administrasi
                                          </p>
                                          <br />
                                          <h3 class="font-weight-bold">
                                            Instansi
                                          </h3>
                                          <p class="font-weight-light">
                                            Balai Pengawasan Transportasi Darat
                                          </p>
                                        </v-col>
                                      </v-row>
                                    </v-col>
                                  </v-row>
                                </v-card-text>
                              </v-card>
                            </v-card-text>
                          </v-card>
                        </v-col>
                        <v-col cols="12" md="6" lg="6" xl="6">
                          <v-card outlined>
                            <v-card-title>Pejabat Penilai Kinerja</v-card-title>
                            <v-card-text>
                              <v-autocomplete
                                outlined
                                label="Pilih Pejabat"
                              ></v-autocomplete>
                              <v-card
                                color="indigo accent-1"
                                rounded="lg"
                                elevation="4"
                                dark
                              >
                                <v-card-text>
                                  <v-row>
                                    <v-col cols="12" md="3" lg="3" xl="3">
                                      <v-avatar rounded="lg" size="162">
                                        <v-img
                                          src="https://themeselection.com/demo/materio-vuetify-vuejs-admin-template-free/demo/img/1.e2938115.png"
                                        ></v-img>
                                      </v-avatar>
                                    </v-col>
                                    <v-col>
                                      <h2>Abdullah Masulili S.Kom</h2>
                                      <br />
                                      <v-row>
                                        <v-col>
                                          <h3 class="font-weight-bold">NIP</h3>
                                          <p class="font-weight-light">
                                            88686574890680
                                          </p>
                                          <br />
                                          <h3 class="font-weight-bold">
                                            Pangkat/Golongan
                                          </h3>
                                          <p class="font-weight-light">
                                            Eselon IV
                                          </p>
                                        </v-col>
                                        <v-col>
                                          <h3 class="font-weight-bold">
                                            Jabatan
                                          </h3>
                                          <p class="font-weight-light">
                                            Pejabat Administrasi
                                          </p>
                                          <br />
                                          <h3 class="font-weight-bold">
                                            Instansi
                                          </h3>
                                          <p class="font-weight-light">
                                            Balai Pengawasan Transportasi Darat
                                          </p>
                                        </v-col>
                                      </v-row>
                                    </v-col>
                                  </v-row>
                                </v-card-text>
                              </v-card>
                            </v-card-text>
                          </v-card>
                        </v-col>
                      </v-row>
                      <br />
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          depressed
                          color="deep-purple accent-3"
                          dark
                          width="150"
                          large
                          @click="stp = stp + 1"
                        >
                          Next
                          <v-icon>mdi-chevron-right</v-icon>
                        </v-btn>
                      </v-card-actions>
                    </v-stepper-content>

                    <v-stepper-content step="2">
                      <br />
                      <v-card outlined>
                        <v-card-title>Pilih Periode SKP</v-card-title>
                        <v-card-text>
                          <v-row>
                            <v-col>
                              <v-menu
                                ref="menu_from"
                                :close-on-content-click="false"
                                :return-value.sync="picker_create_skp.date_from"
                                v-model="picker_create_skp.menu_from"
                                transition="slide-x-transition"
                                min-width="auto"
                                offset-y
                              >
                                <template v-slot:activator="{ attrs, on }">
                                  <v-text-field
                                    label="Dari"
                                    v-bind="attrs"
                                    v-on="on"
                                    v-model="picker_create_skp.date_from"
                                    append-icon="mdi-calendar"
                                    outlined
                                    readonly
                                  ></v-text-field>
                                </template>

                                <v-date-picker
                                  no-title
                                  v-model="picker_create_skp.date_from"
                                  @change="
                                    $refs.menu_from.save(
                                      picker_create_skp.date_from
                                    )
                                  "
                                ></v-date-picker>
                              </v-menu>
                            </v-col>
                            <v-col>
                              <v-menu
                                ref="menu_to"
                                :close-on-content-click="false"
                                :return-value.sync="picker_create_skp.date_to"
                                v-model="picker_create_skp.menu_to"
                                transition="slide-x-transition"
                                min-width="auto"
                                offset-y
                              >
                                <template v-slot:activator="{ attrs, on }">
                                  <v-text-field
                                    label="Sampai"
                                    v-bind="attrs"
                                    v-on="on"
                                    v-model="picker_create_skp.date_to"
                                    append-icon="mdi-calendar"
                                    outlined
                                    readonly
                                  ></v-text-field>
                                </template>

                                <v-date-picker
                                  no-title
                                  v-model="picker_create_skp.date_to"
                                  @change="
                                    $refs.menu_to.save(
                                      picker_create_skp.date_to
                                    )
                                  "
                                ></v-date-picker>
                              </v-menu>
                            </v-col>
                          </v-row>
                        </v-card-text>
                        <v-card-actions>
                          <v-btn
                            @click="stp = stp - 1"
                            class="ml-2"
                            color="secondary"
                            width="150"
                            text
                            large
                          >
                            <v-icon left>mdi-chevron-left</v-icon>
                            back
                          </v-btn>
                          <v-spacer></v-spacer>
                          <v-btn
                            large
                            depressed
                            dark
                            @click="stp = stp + 1"
                            color="deep-purple accent-3"
                            class="mr-2"
                            width="150"
                          >
                            <span>Next</span>
                            <v-icon right>mdi-chevron-right</v-icon>
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-stepper-content>

                    <v-stepper-content step="3">
                      <v-row class="mt-3">
                        <v-col>
                          <v-card outlined rounded="lg">
                            <v-card-title>Kinerja Utama</v-card-title>
                            <v-card-text>
                              <v-row
                                v-for="(kinut, i) in kinerja_utama.model"
                                :key="`kinut_${i}`"
                              >
                                <v-col>
                                  <p>Rencana Kinerja</p>
                                  <v-textarea
                                    outlined
                                    clearable
                                    :label="`Rencana Kinerja ${i + 1}`"
                                    v-model="kinut._tugas"
                                  ></v-textarea>
                                </v-col>
                                <v-col>
                                  <p>Indikator Kinerja Individu</p>
                                  <v-row
                                    v-for="(child_iki, j) in kinut._iki"
                                    :key="`iki_${j}`"
                                  >
                                    <v-col>
                                      <v-textarea
                                        outlined
                                        clearable
                                        :label="`IKI ${i + 1}.${j + 1}`"
                                        v-model="child_iki[j]"
                                      ></v-textarea>
                                    </v-col>
                                  </v-row>
                                  <v-btn
                                    large
                                    @click="handleIki(i, 'add')"
                                    color="deep-purple accent-1"
                                    depressed
                                    dark
                                  >
                                    <v-icon left>mdi-plus-circle</v-icon>
                                    tambah
                                  </v-btn>
                                  <v-btn
                                    large
                                    text
                                    @click="handleIki(i, 'del')"
                                    color="blue-grey"
                                    class="float-right"
                                    v-if="
                                      kinerja_utama.model[i]._iki.length !== 1
                                    "
                                  >
                                    hapus
                                    <v-icon right>mdi-minus-circle</v-icon>
                                  </v-btn>
                                </v-col>
                                <v-col>
                                  <p>Aspek</p>
                                  <v-row
                                    v-for="(child_aspek, k) in kinut._aspek"
                                    :key="`aspek_${k}`"
                                  >
                                    <v-col>
                                      <v-autocomplete
                                        outlined
                                        clearable
                                        :label="`Aspek ${i + 1}.${k + 1}`"
                                        :items="sl_aspek_item"
                                      ></v-autocomplete>
                                    </v-col>
                                  </v-row>
                                  <v-btn
                                    large
                                    depressed
                                    dark
                                    color="deep-purple accent-1"
                                    @click="handleAspek(i, 'add')"
                                  >
                                    <v-icon left>mdi-plus-circle</v-icon>
                                    Tambah
                                  </v-btn>
                                  <v-btn
                                    large
                                    text
                                    color="blue-grey"
                                    class="float-right"
                                    v-if="
                                      kinerja_utama.model[i]._aspek.length !== 1
                                    "
                                    @click="handleAspek(i, 'del')"
                                  >
                                    Hapus
                                    <v-icon right>mdi-minus-circle</v-icon>
                                  </v-btn>
                                </v-col>
                                <v-col>
                                  <p>Target</p>
                                  <v-row
                                    v-for="(child_target, l) in kinut._target"
                                    :key="`target_${l}`"
                                  >
                                    <v-col>
                                      <v-text-field
                                        outlined
                                        clearable
                                        :label="`Target ${i + 1}.${l + 1}`"
                                        v-model="child_target[l]"
                                      ></v-text-field>
                                    </v-col>
                                  </v-row>
                                  <v-btn
                                    depressed
                                    large
                                    dark
                                    color="deep-purple accent-1"
                                    @click="handleTarget(i, 'add')"
                                  >
                                    <v-icon left>mdi-plus-circle</v-icon>
                                    tambah
                                  </v-btn>
                                  <v-btn
                                    large
                                    class="float-right"
                                    text
                                    color="blue-grey"
                                    @click="handleTarget(i, 'del')"
                                    v-if="
                                      kinerja_utama.model[i]._target.length !==
                                      1
                                    "
                                  >
                                    hapus
                                    <v-icon right>mdi-minus-circle</v-icon>
                                  </v-btn>
                                </v-col>
                              </v-row>
                              <br />
                              <v-divider></v-divider>
                              <br />
                              <v-btn
                                block
                                text
                                large
                                color="blue-grey"
                                @click="handleKinut('add')"
                              >
                                <v-icon left>mdi-plus-circle</v-icon>
                                <span>Rencana Kinerja Utama</span>
                              </v-btn>
                              <v-btn
                                block
                                text
                                large
                                v-if="kinerja_utama.model.length !== 1"
                                @click="handleKinut('del')"
                              >
                                <span class="red--text accent-2"
                                  >Hapus Item</span
                                >
                                <v-icon right color="red accent-2"
                                  >mdi-minus-circle</v-icon
                                >
                              </v-btn>
                            </v-card-text>
                          </v-card>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col>
                          <v-card outlined rounded="lg">
                            <v-card-title>Kinerja Tambahan</v-card-title>
                            <v-card-text>
                              <v-row
                                v-for="(kintam, i) in kinerja_tambahan.model"
                                :key="`kintam_${i}`"
                              >
                                <v-col>
                                  <p>Rencana Kinerja</p>
                                  <v-textarea
                                    outlined
                                    clearable
                                    :label="`Rencana Kinerja ${i + 1}`"
                                    v-model="kintam._tugas"
                                  ></v-textarea>
                                </v-col>
                                <v-col>
                                  <p>Indikator Kinerja Individu</p>
                                  <v-row
                                    v-for="(child_iki, j) in kintam._iki"
                                    :key="`iki_${j}`"
                                  >
                                    <v-col>
                                      <v-textarea
                                        outlined
                                        clearable
                                        :label="`IKI ${i + 1}.${j + 1}`"
                                        v-model="child_iki[j]"
                                      ></v-textarea>
                                    </v-col>
                                  </v-row>
                                  <v-btn
                                    large
                                    @click="handleIkiKintam(i, 'add')"
                                    color="deep-purple accent-1"
                                    depressed
                                    dark
                                  >
                                    <v-icon left>mdi-plus-circle</v-icon>
                                    tambah
                                  </v-btn>
                                  <v-btn
                                    large
                                    text
                                    @click="handleIkiKintam(i, 'del')"
                                    color="blue-grey"
                                    class="float-right"
                                    v-if="
                                      kinerja_tambahan.model[i]._iki.length !==
                                      1
                                    "
                                  >
                                    hapus
                                    <v-icon right>mdi-minus-circle</v-icon>
                                  </v-btn>
                                </v-col>
                                <v-col>
                                  <p>Aspek</p>
                                  <v-row
                                    v-for="(child_aspek, k) in kintam._aspek"
                                    :key="`aspek_${k}`"
                                  >
                                    <v-col>
                                      <v-autocomplete
                                        outlined
                                        clearable
                                        :label="`Aspek ${i + 1}.${k + 1}`"
                                        :items="sl_aspek_item"
                                      ></v-autocomplete>
                                    </v-col>
                                  </v-row>
                                  <v-btn
                                    large
                                    depressed
                                    dark
                                    color="deep-purple accent-1"
                                    @click="handleAspekKintam(i, 'add')"
                                  >
                                    <v-icon left>mdi-plus-circle</v-icon>
                                    Tambah
                                  </v-btn>
                                  <v-btn
                                    large
                                    text
                                    color="blue-grey"
                                    class="float-right"
                                    v-if="
                                      kinerja_tambahan.model[i]._aspek
                                        .length !== 1
                                    "
                                    @click="handleAspekKintam(i, 'del')"
                                  >
                                    Hapus
                                    <v-icon right>mdi-minus-circle</v-icon>
                                  </v-btn>
                                </v-col>
                                <v-col>
                                  <p>Target</p>
                                  <v-row
                                    v-for="(child_target, l) in kintam._target"
                                    :key="`target_${l}`"
                                  >
                                    <v-col>
                                      <v-text-field
                                        outlined
                                        clearable
                                        :label="`Target ${i + 1}.${l + 1}`"
                                        v-model="child_target[l]"
                                      ></v-text-field>
                                    </v-col>
                                  </v-row>
                                  <v-btn
                                    depressed
                                    large
                                    dark
                                    color="deep-purple accent-1"
                                    @click="handleTargetKintam(i, 'add')"
                                  >
                                    <v-icon left>mdi-plus-circle</v-icon>
                                    tambah
                                  </v-btn>
                                  <v-btn
                                    large
                                    class="float-right"
                                    text
                                    color="blue-grey"
                                    @click="handleTargetKintam(i, 'del')"
                                    v-if="
                                      kinerja_tambahan.model[i]._target
                                        .length !== 1
                                    "
                                  >
                                    hapus
                                    <v-icon right>mdi-minus-circle</v-icon>
                                  </v-btn>
                                </v-col>
                              </v-row>
                              <br />
                              <v-divider></v-divider>
                              <br />
                              <v-btn
                                block
                                text
                                large
                                @click="handleKintam('add')"
                              >
                                <span class="blue-grey--text"
                                  >Tambah Rencana Kinerja Tambahan</span
                                >
                                <v-icon right color="blue-grey"
                                  >mdi-plus-circle</v-icon
                                >
                              </v-btn>
                              <v-btn
                                block
                                text
                                large
                                v-if="kinerja_tambahan.model.length !== 0"
                                @click="handleKintam('del')"
                              >
                                <span class="red--text accent-2"
                                  >Hapus Item</span
                                >
                                <v-icon right color="red accent-2"
                                  >mdi-trash-can</v-icon
                                >
                              </v-btn>
                            </v-card-text>
                          </v-card>
                        </v-col>
                      </v-row>
                      <br />
                      <v-card-actions>
                        <v-btn
                          large
                          text
                          @click="stp = stp - 1"
                          color="deep-purple accent-1"
                          width="150"
                        >
                          <v-icon left>mdi-chevron-left</v-icon>
                          <span>Back</span>
                        </v-btn>

                        <v-spacer></v-spacer>

                        <v-btn
                          depressed
                          large
                          width="150"
                          color="deep-purple accent-3"
                          dark
                        >
                          save
                          <v-icon right>mdi-content-save</v-icon>
                        </v-btn>
                        <v-btn large text color="accent" width="150">
                          reset
                          <v-icon right>mdi-reload</v-icon>
                        </v-btn>
                      </v-card-actions>
                    </v-stepper-content>
                  </v-stepper-items>
                </v-stepper>
              </v-tab-item>
            </v-tabs>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
      picker: {
        menu_from: false,
        menu_to: false,
        date_from: null,
        date_to: null,
      },
      picker_create_skp: {
        menu_from: false,
        menu_to: false,
        date_from: null,
        date_to: null,
      },
      sl_aspek_item: ["Waktu", "Kuantitas", "Kualitas"],
      stp: 1,
      kinerja_utama: {
        model: [
          {
            _tugas: null,
            _iki: [{ _iki_child_model: null }],
            _aspek: [{ _aspek_child_model: null }],
            _target: [{ _target_child_model: null }],
          },
        ],
      },
      kinerja_tambahan: {
        model: [],
      },
    };
  },
  computed: {},
  methods: {
    handleKinut(act) {
      if (act === "add") {
        this.kinerja_utama.model.push({
          _tugas: null,
          _iki: [
            {
              _iki_child_model: null,
            },
          ],
          _aspek: [
            {
              _aspek_child_model: null,
            },
          ],
          _target: [
            {
              _target_child_model: null,
            },
          ],
        });
      } else {
        if (this.kinerja_utama.model.length <= 1) {
          console.log("Minimal 1 item");
        } else {
          this.kinerja_utama.model.pop();
          console.log(this.kinerja_utama.model);
        }
      }
      console.log(this.kinerja_utama.model);
    },

    handleKintam(act) {
      if (act === "add") {
        this.kinerja_tambahan.model.push({
          _tugas: null,
          _aspek: [{ _aspek_child_model: null }],
          _iki: [{ _iki_child_model: null }],
          _target: [{ _target_child_model: null }],
        });
      } else {
        if (this.kinerja_tambahan.model.length === 0) {
          console.log("Tidak ada item yang dihapus");
        } else {
          this.kinerja_tambahan.model.pop();
          console.log(this.kinerja_tambahan.model);
        }
      }
      console.log(this.kinerja_tambahan.model);
    },

    handleIki(index, act) {
      if (act === "add") {
        this.kinerja_utama.model[index]._iki.push({
          _iki_child_model: null,
        });
      } else {
        if (this.kinerja_utama.model[index].length !== 1 && act === "del") {
          this.kinerja_utama.model[index]._iki.pop();
        } else {
          console.log("indikator kinerja individu minimal 1 item");
        }
      }
      console.log(this.kinerja_utama.model[index]._iki);
    },

    handleAspek(index, act) {
      if (act === "add") {
        this.kinerja_utama.model[index]._aspek.push({
          _aspek_child_model: null,
        });
      } else {
        if (this.kinerja_utama.model[index]._aspek.length && act === "del") {
          this.kinerja_utama.model[index]._aspek.pop();
        } else {
          console.log("Aspek minimal 1");
        }
      }
      console.log(this.kinerja_utama.model[index]._aspek);
    },

    handleTarget(index, act) {
      if (act === "add") {
        this.kinerja_utama.model[index]._target.push({
          _target_child_model: null,
        });
      } else {
        if (this.kinerja_utama.model[index].length !== 1 && act === "del") {
          this.kinerja_utama.model[index]._target.pop();
        } else {
          console.log("Target minimal 1 item");
        }
      }
    },

    handleIkiKintam(index, act) {
      if (act === "add") {
        this.kinerja_tambahan.model[index]._iki.push({
          _iki_child_model: null,
        });
      } else {
        if (this.kinerja_tambahan.model[index].length !== 1 && act === "del") {
          this.kinerja_tambahan.model[index]._iki.pop();
        } else {
          console.log("indikator kinerja individu minimal 1 item");
        }
      }
      console.log(this.kinerja_tambahan.model[index]._iki);
    },

    handleAspekKintam(index, act) {
      if (act === "add") {
        this.kinerja_tambahan.model[index]._aspek.push({
          _aspek_child_model: null,
        });
      } else {
        if (this.kinerja_tambahan.model[index]._aspek.length && act === "del") {
          this.kinerja_tambahan.model[index]._aspek.pop();
        } else {
          console.log("Aspek minimal 1");
        }
      }
      console.log(this.kinerja_tambahan.model[index]._aspek);
    },

    handleTargetKintam(index, act) {
      if (act === "add") {
        this.kinerja_tambahan.model[index]._target.push({
          _target_child_model: null,
        });
      } else {
        if (this.kinerja_tambahan.model[index].length !== 1 && act === "del") {
          this.kinerja_tambahan.model[index]._target.pop();
        } else {
          console.log("Target minimal 1 item");
        }
      }
    },
  },
};
</script>