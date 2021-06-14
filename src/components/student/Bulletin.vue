<template>
 <div class="px-md-8 py-md-8">
    <v-data-table
        :headers="dessertHeaders"
        :items="desserts"
        :single-expand="singleExpand"
        :expanded.sync="expanded"
        item-key="name"
        show-expand
        class="elevation-1"
    >
        <template v-slot:top>
        <v-toolbar flat>
            <v-toolbar-title>Notes</v-toolbar-title>
            <v-spacer></v-spacer>
            <div>
                <a href="" @click.prevent="" class="bg-primaire white--text px-3 py-1 rounded">Telecharger la note</a>
            </div>
            
        </v-toolbar>
        </template>
        <template v-slot:expanded-item="{ headers, item }">
        <td :colspan="headers.length">
             {{ item.name }} est valide
        </td>
        </template>
    </v-data-table>
 </div>
</template>
<script>
  export default {
    data () {
      return {
        expanded: [],
        singleExpand: false,
        dessertHeaders: [
          {
            text: 'Matieres',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Test 1', value: 'calories' },
          { text: 'Test 2', value: 'fat' },
          { text: 'Text 3', value: 'carbs' },
          { text: 'Exam', value: 'protein' },
          { text: 'Average', value: 'iron' },
          { text: '', value: 'data-table-expand' },
        ],
        desserts: [
          {
            name: 'Network',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
          },
        ],
      }
    },
  }
</script>