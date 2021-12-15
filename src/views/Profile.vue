<template>
  <v-col>
    <v-row>
      <v-col>
        <v-card>
          <v-tabs vertical color="indigo accent-2">
            <v-tab>
              <v-icon left> mdi-card-account-details </v-icon>
              Akun
            </v-tab>
            <v-tab>
              <v-icon left> mdi-account-key </v-icon>
              Keamanan
            </v-tab>
            <v-tab>
              <v-icon left> mdi-information-outline </v-icon>
              Info
            </v-tab>

            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <v-col class="ma-3">
                    <v-row no-gutters>
                      <v-avatar size="150" rounded="lg">
                        <img
                          src="https://themeselection.com/demo/materio-vuetify-vuejs-admin-template-free/demo/img/1.e2938115.png"
                          alt="materio"
                        />
                      </v-avatar>
                      <div class="ml-5 d-flex grow align-center">
                        <v-row no-gutters>
                          <v-file-input
                            outlined
                            label="Pilih Foto"
                            clearable
                            messages="Allowed JPG, GIF or PNG. Max size of 800K"
                          ></v-file-input>
                        </v-row>
                      </div>
                    </v-row>
                    <v-row class="mt-5">
                      <v-col>
                        <v-text-field
                          outlined
                          dense
                          label="ID Pegawai"
                        ></v-text-field>
                        <v-text-field
                          outlined
                          dense
                          label="Nama Lengkap"
                        ></v-text-field>
                        <v-text-field outlined dense label="NIP"></v-text-field>
                      </v-col>
                      <v-col>
                        <v-text-field
                          outlined
                          dense
                          label="Role"
                        ></v-text-field>
                        <v-text-field
                          outlined
                          dense
                          label="Posisi"
                        ></v-text-field>
                        <v-autocomplete
                          outlined
                          dense
                          label="Jenis Kelamin"
                        ></v-autocomplete>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-card-text>
                <v-card-actions class="mb-5 mr-3">
                  <v-spacer></v-spacer>
                  <v-btn depressed large color="primary"
                    >
                    Simpan Data
                    <v-icon right>mdi-content-save</v-icon>
                  </v-btn
                  >
                  <v-btn text large color="secondary">
                    Batalkan
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <v-row>
                    <v-col class="ma-5">
                      <v-text-field
                        type="password"
                        append-icon="mdi-eye"
                        clearable
                        clear-icon="mdi-close"
                        label="Password Saat ini"
                        outlined
                        dense
                      ></v-text-field>
                      <v-text-field
                        type="password"
                        append-icon="mdi-eye"
                        clearable
                        clear-icon="mdi-close"
                        label="Password Baru"
                        outlined
                        dense
                      ></v-text-field>
                      <v-text-field
                        type="password"
                        append-icon="mdi-eye"
                        clearable
                        clear-icon="mdi-close"
                        label="Konfirmasi Password"
                        outlined
                        dense
                      ></v-text-field>
                    </v-col>
                    <v-col></v-col>
                  </v-row>
                  <v-divider></v-divider>
                  <v-row>
                    <v-col class="grow ma-5">
                      <v-row no-gutters>
                        <h2>
                          <v-icon>mdi-key-outline</v-icon> Otentikasi Dua Faktor
                        </h2>
                      </v-row>
                      <v-row
                        no-gutters
                        class="flex-column align-center justify-center"
                      >
                        <br />
                        <br />
                        <br />
                        <v-avatar color="primary" size="65" rounded="lg">
                          <v-icon large color="white"
                            >mdi-lock-open-outline</v-icon
                          >
                        </v-avatar>
                        <br />
                        <h3>Otentikasi Dua Faktor Belum Diaktifkan.</h3>
                        <br />
                        <p>
                          Otentikasi dua faktor memberikan lapisan keamanan
                          lebih pada akun anda sehingga memerlukan proses
                          tambahan pada saat log in.
                        </p>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-card-text>
                <v-card-actions class="my-5">
                  <v-spacer></v-spacer>
                  <v-btn large color="primary">
                    Simpan Data
                    <v-icon right>mdi-content-save</v-icon>
                  </v-btn>
                  <v-btn text>
                    Batalkan
                    <v-icon right>mdi-close</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <v-row class="flex-column ma-5" no-gutters>
                    <v-textarea label="Bio" outlined></v-textarea>
                  </v-row>
                  <v-row>
                    <v-col class="ma-5">
                      <v-menu
                        ref="menu"
                        v-model="menu"
                        :close-on-content-click="false"
                        :return-value.sync="dates"
                        transition="slide-x-transition"
                        offset-y
                        min-width="auto"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            v-model="dates"
                            clearable
                            outlined
                            clear-icon="mdi-close"
                            label="Tanggal Lahir"
                            append-icon="mdi-calendar"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                          ></v-text-field>
                        </template>
                        <v-date-picker
                          v-model="dates"
                          no-title
                          scrollable
                        >
                          <v-spacer></v-spacer>
                          <v-btn text color="primary" @click="menu = false">
                            Cancel
                          </v-btn>
                          <v-btn
                            text
                            color="primary"
                            @click="$refs.menu.save(dates)"
                          >
                            OK
                          </v-btn>
                        </v-date-picker>
                      </v-menu>
                      <v-text-field outlined label="Alamat"></v-text-field>
                      <v-text-field
                        outlined
                        label="Nomor Telpon"
                      ></v-text-field>
                    </v-col>
                    <v-col class="mt-4">
                      <v-radio-group row>
                        <v-radio label="Pria"></v-radio>
                        <v-radio label="Wanita"></v-radio>
                        <v-radio label="Lainnya"></v-radio>
                      </v-radio-group>
                    </v-col>
                  </v-row>
                </v-card-text>
                <v-card-actions class="mb-5 mr-5">
                  <v-spacer></v-spacer>
                  <v-btn large color="primary"
                    >
                    Simpan Data
                    <v-icon right>mdi-content-save</v-icon>
                  </v-btn
                  >
                  <v-btn text large>
                    Batalkan
                    <v-icon right>mdi-close</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-tab-item>
          </v-tabs>
        </v-card>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
export default {
  name: "profile",
  data() {
    return {
      menu: false,
      dates: null
    };
  },
  methods: {},
  computed: {},
};
</script>