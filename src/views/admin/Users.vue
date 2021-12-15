<template>
  <v-row class="ma-2">
    <v-col>
      <v-card>
        <v-card-title>Manage Criteria</v-card-title>
        <v-card-text>
          <v-tabs grow color="indigo accent-2">
            <v-tabs-slider></v-tabs-slider>
            <v-tab>
              User Lists
              <v-icon right>mdi-account-details</v-icon>
            </v-tab>
            <v-tab>
              Add User
              <v-icon right>mdi-account-plus</v-icon>
            </v-tab>

            <v-tab-item>
              <br />
              <v-card outlined>
                <v-card-text>
                  <v-data-table :headers="table.headers" :items="table.items">
                    <template v-slot:item.actions="{ item }">
                      <v-btn depressed color="accent" class="mr-2">
                        Edit
                        <v-icon right @click="editItem(item)">
                          mdi-pencil
                        </v-icon>
                      </v-btn>
                      <v-btn text color="error">
                        Delete
                        <v-icon right @click="deleteItem(item)">
                          mdi-delete
                        </v-icon>
                      </v-btn>
                    </template>
                  </v-data-table>
                </v-card-text>
              </v-card>
            </v-tab-item>

            <v-tab-item>
              <br />
              <v-card outlined>
                <v-card-text>
                  <v-row>
                    <v-col>
                      <v-text-field outlined label="Name"></v-text-field>
                    </v-col>
                    <v-col>
                      <v-autocomplete outlined label="Role"></v-autocomplete>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" md="4" lg="4" xl="4">
                      <v-text-field outlined append-icon="mdi-eye" type="password" label="Password" hint="Minimal 8 Karakter"></v-text-field>
                      <v-text-field
                        outlined
                        append-icon="mdi-eye"
                        type="password"
                        hint="Password Harus Sama"
                        label="Confirm Password"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-card-text>
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
  name: "users",
  data() {
    return {
      table: {
        headers: [
          { text: "ID", value: "id" },
          { text: "Name", value: "name" },
          { text: "Role", value: "role" },
          { text: "Created At", value: "created_at" },
          { text: "Actions", value: "actions", align: "center" },
        ],
        items: [
          {
            id: 1,
            name: "Abdullah Masulili",
            role: "admin",
            created_at: "2021-11-19 08:31:20",
          },
        ],
      },
    };
  },
  methods: {},
  computed: {},
};
</script>