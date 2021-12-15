<template>
  <nav>
    <v-navigation-drawer v-model="drawer" app floating>
      <v-list shaped>
        <v-subheader>
          <span> User Menu </span>
        </v-subheader>
        <v-list-item
          v-for="(item, i) in main_menu"
          :key="i"
          active-class="primary white--text"
          link
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
          v-for="(item, i) in admin_menu"
          :key="i"
          active-class="info white--text"
          link
          :to="item.href"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content >{{ item.content }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      main_menu: [
        { icon: "mdi-view-dashboard", content: "Dashboard", href: "/" },
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
      ],
      admin_menu: [
        {
          icon: "mdi-account-hard-hat",
          content: "Manage Employers",
          href: "/manage-employers",
        },
        {
          icon: "mdi-clipboard-file",
          content: "Manage Criterias",
          href: "/manage-criterias",
        },
        {
          icon: "mdi-account-multiple",
          content: "Manage Users",
          href: "/manage-users",
        },
      ],
    };
  },
};
</script>