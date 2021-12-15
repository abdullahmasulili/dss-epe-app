<template>
  <v-col>
    <v-row>
      <v-col cols="12" md="4" lg="4" xl="4">
        <v-card rounded="lg">
          <v-card-title>Selamat Datang Abdullah</v-card-title>
          <v-card-subtitle
            >Hasil Penilaian Terakhir Anda Adalah:</v-card-subtitle
          >
          <v-card-text>
            <h3 class="green--text">Sangat Baik</h3>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn outlined color="accent">lihat rincian</v-btn>
          </v-card-actions>
        </v-card>
        <br />
        <v-card rounded="lg">
          <v-card-title>Chart Kinerja</v-card-title>
          <v-card-text>
            <apexchart
              type="bar"
              :options="chart.options"
              :series="chart.series"
            >
            </apexchart>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="8" lg="8" xl="8">
        <v-card rounded="lg">
          <v-card-title>Tabel Kinerja Pegawai</v-card-title>
          <v-card-text>
            <v-data-table :headers="table.headers" :items-per-page="50" class="elevation-2"></v-data-table>
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
      table: {
        headers: [
          { text: "ID Pegawai", align: "start", value: "employer_id"},
          { text: "Nama", value: "name", align: "start" },
          { text: "NIP", value: "nip", align: "start" },
          { text: "Jabatan", value: "position", align: "start" },
          { text: "Nilai", value: "final_score", align: "start" },
          { text: "Catatan", value: "notes", align: "start" },
        ],
      },
      chart: {
        options: {
          chart: {
            id: "vuechart-example",
          },
          xaxis: {
            categories: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
          },
        },
        series: [
          {
            name: "series-1",
            data: [55, 62, 89, 66, 98, 72, 101, 75, 94, 120, 117, 139],
          },
        ],
      },
    };
  },
};
</script>