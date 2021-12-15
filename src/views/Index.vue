<template>
  <v-row class="fill-height blue-grey lighten-5">
    <!-- <Nav /> -->
    <nav>
      <v-navigation-drawer
        v-model="drawer"
        color="blue-grey lighten-5"
        app
        floating
      >
        <v-list shaped>
          <v-subheader>
            <span> User Menu </span>
          </v-subheader>
          <v-list-item
            v-for="item in main_menu"
            :key="item.i"
            active-class="primary white--text"
            link
            dense
            :to="item.href"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>{{ item.content }}</v-list-item-content>
          </v-list-item>
          <v-subheader>
            <span> Administrator Menu</span>
          </v-subheader>
          <v-list-item
            v-for="item in admin_menu"
            :key="item.i"
            active-class="info white--text"
            link
            dense
            :to="item.href"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>{{ item.content }}</v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </nav>
    <v-col class="ma-3">
      <v-row no-gutters>
        <v-btn icon @click="drawer = !drawer">
          <v-icon>mdi-menu</v-icon>
        </v-btn>

        <v-spacer></v-spacer>

        <v-menu v-model="menu" offset-x offset-y>
          <template v-slot:activator="{ attr, on }">
            <v-btn icon v-bind="attr" v-on="on">
              <v-avatar size="36" color="amber">
                <img
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                  alt="profile_picture"
                />
              </v-avatar>
            </v-btn>
          </template>

          <v-card>
            <v-list>
              <v-list-item>
                <v-list-item-avatar>
                  <img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                    alt="john"
                  />
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>Abdullah Masulili</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn depressed>
                Logout
                <v-icon right>mdi-logout</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </v-row>
      <v-row class="fill-height blue-grey lighten-5">
        <transition name="slide-x-transition" mode="out-in">
          <router-view></router-view>
        </transition>
      </v-row>
      <v-row class="flex-column">
        <Footer />
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
// import Nav from '../components/Nav.vue'
import Footer from "../components/Footer.vue";
export default {
  data() {
    return {
      drawer: true,
      menu: false,
      main_menu: [
        {
          icon: "mdi-view-dashboard",
          content: "Dashboard",
          href: "/dashboard",
        },
        {
          icon: "mdi-account-cog",
          content: "Profile Settings",
          href: "/profile",
        },
        {
          icon: "mdi-account-check",
          content: "Evaluate Worker",
          href: "/evaluate",
        },
        {
          icon: "mdi-clipboard-list",
          content: "SKP",
          href: "/skp",
        },
        {
          icon: "mdi-clipboard-check",
          content: "Evaluate SKP",
          href: "/evaluate-skp",
        },
        {
          icon: "mdi-vector-union",
          content: "Proceed SMART",
        },
      ],
      admin_menu: [
        {
          icon: "mdi-account-hard-hat",
          content: "Manage Employers",
          href: "/employers",
        },
        {
          icon: "mdi-clipboard-file",
          content: "Manage Criterias",
          href: "/criterias",
        },
        {
          icon: "mdi-account-multiple",
          content: "Manage Users",
          href: "/users",
        },
      ],
    };
  },
  components: {
    //   Nav,
    Footer,
  },
  methods: {},
  computed: {},
};
</script>