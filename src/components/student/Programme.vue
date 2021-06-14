<template>
  <div class="px-md-8 py-md-8">
    <v-sheet
      tile
      height="54"
      class="d-flex"
    >
      <v-btn
        icon
        class="ma-2"
        @click="$refs.calendar.prev()"
      >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      
      
        <h3 class="mt-3 ml-5">Programme des cours de la semaine</h3>
      <v-spacer></v-spacer>
      <v-btn
        icon
        class="ma-2"
        @click="$refs.calendar.next()"
      >
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-sheet>
    <v-sheet height="600">
      <v-calendar
        ref="calendar"
        v-model="value"
        :weekdays="weekday"
        :type="type"
        :events="events"
        :event-overlap-mode="mode"
        :event-overlap-threshold="30"
        :event-color="getEventColor"
        @change="getEvents"
      ></v-calendar>
    </v-sheet>


    <div class="white mt-8 px-3 py-4">
        <h3>Les salles de cours suivant la couleur du programme</h3>
        <v-row>
            <v-col
            cols="12"
            md="3"
            >
                <div>
                    <p><span class="px-3 py-1 red rounded-circle mr-3"></span> Hall A</p>
                </div>
                <div>
                    <p><span class="px-3 py-1 blue rounded-circle mr-3"></span> Hall A</p>
                </div>
                <div>
                    <p><span class="px-3 py-1 cyan rounded-circle mr-3"></span> Hall A</p>
                </div>

            </v-col>
            <v-col
            cols="12"
            md="3"
            >
                <div>
                    <p><span class="px-3 py-1 deep-purple rounded-circle mr-3"></span> Hall A</p>
                </div>
                <div>
                    <p><span class="px-3 py-1 green rounded-circle mr-3"></span> Hall A</p>
                </div>
                <div>
                    <p><span class="px-3 py-1 orange rounded-circle mr-3"></span> Hall A</p>
                </div>

            </v-col>
        </v-row>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      type: 'week',
      types: ['month', 'week', 'day', '4day'],
      mode: 'stack',
      modes: ['stack', 'column'],
      weekday: [0, 1, 2, 3, 4, 5, 6],
      weekdays: [
        { text: 'Sun - Sat', value: [0, 1, 2, 3, 4, 5, 6] },
        { text: 'Mon - Sun', value: [1, 2, 3, 4, 5, 6, 0] },
        { text: 'Mon - Fri', value: [1, 2, 3, 4, 5] },
        { text: 'Mon, Wed, Fri', value: [1, 3, 5] },
      ],
      value: '',
      events: [],
      colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'red'],
      names: ['Microprocessor', 'Networking', 'PHP MySql', 'Javascript', 'Microcontroller', 'Electronique', 'Conference', 'Merise'],
    }),
    methods: {
      getEvents ({ start, end }) {
        const events = []

        const min = new Date(`${start.date}T00:00:00`)
        const max = new Date(`${end.date}T23:59:59`)
        const days = (max.getTime() - min.getTime()) / 86400000
        const eventCount = this.rnd(days, days + 20)

        for (let i = 0; i < eventCount; i++) {
          const allDay = this.rnd(0, 3) === 0
          const firstTimestamp = this.rnd(min.getTime(), max.getTime())
          const first = new Date(firstTimestamp - (firstTimestamp % 900000))
          const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000
          const second = new Date(first.getTime() + secondTimestamp)

          events.push({
            name: this.names[this.rnd(0, this.names.length - 1)],
            start: first,
            end: second,
            color: this.colors[this.rnd(0, this.colors.length - 1)],
            timed: !allDay,
          })
        }

        this.events = events
      },
      getEventColor (event) {
        return event.color
      },
      rnd (a, b) {
        return Math.floor((b - a + 1) * Math.random()) + a
      },
    },
  }
</script>