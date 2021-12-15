<template>
  <v-row no-gutters class="fill-height">
    <v-col class="ma-5">
      <v-card>
        <v-card-text>
          <v-tabs grow color="indigo accent-2">
            <v-tab>
              Employer Lists
              <v-icon right>mdi-account-group</v-icon>
            </v-tab>
            <v-tab>
              Add Employer
              <v-icon right> mdi-account-plus </v-icon>
            </v-tab>
            <v-tab-item>
              <v-col>
                <v-row>
                  <v-col>
                    <v-card outlined rounded="lg">
                      <v-card-title> Tabel Pegawai </v-card-title>
                      <v-card-text>
                        <v-data-table :headers="table.headers"></v-data-table>
                      </v-card-text>
                    </v-card>
                  </v-col>
                  <v-col>
                    <v-card outlined rounded="lg">
                      <v-card-title> Tabel Pejabat </v-card-title>
                      <v-card-text>
                        <v-data-table :headers="table.headers"></v-data-table>
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
              </v-col>
            </v-tab-item>
            <v-tab-item>
              <v-card>
                <v-card-text>
                  <v-row>
                    <v-col>
                      <h2>Form Tambah Data Pegawai</h2>
                    </v-col>
                  </v-row>
                  <v-row class="mt-3">
                    <v-col cols="12" md="6" lg="6" xl="6">
                      <v-text-field outlined label="Nama"></v-text-field>
                      <v-text-field outlined label="Pangkat"></v-text-field>
                      <v-text-field outlined label="Instansi"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="6" xl="6">
                      <v-text-field outlined label="NIP"></v-text-field>
                      <v-text-field outlined label="Jabatan"></v-text-field>
                      <v-row no-gutters class="d-flex align-center">
                        <p class="mt-3 mr-3">Jenis Kelamin:</p>
                        <v-radio-group row>
                          <v-radio label="Pria" value="male"></v-radio>
                          <v-radio label="Wanita" value="female"></v-radio>
                          <v-radio label="Lainnya" value="other"></v-radio>
                        </v-radio-group>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn large color="primary">
                    Simpan data
                    <v-icon right>mdi-content-save</v-icon>
                  </v-btn>
                  <v-btn text large color="secondary">
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
  name: "employers",
  data() {
    return {
      table: {
        headers: [
          { text: "Nama" },
          { text: "NIP" },
          { text: "Pangkat" },
          { text: "Jabatan" },
          { text: "Instansi" },
        ],
      },
    };
  },
  methods: {},
  computed: {},
};
</script>