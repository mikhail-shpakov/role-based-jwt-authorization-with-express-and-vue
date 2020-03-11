<template lang="pug">
.container
  p.title.is-size-4 Список серверов
  p.subtitle
    | Нажмите на любой сервер, чтобы начать редактирование
    |  и Esc, чтобы выйти из режима редактирования
  .table-box
    b-table(
      :data="data"
      :columns="columns"
      :loading="isLoading"
      :selected.sync="selected"
      hoverable
      striped
    )
      template(slot='footer')
        .has-text-right Серверов всего: {{ data.length }}

      template(slot='empty')
          section.section
            .content.has-text-grey.has-text-centered
              p
                b-icon(
                  icon='emoticon-sad'
                  size='is-large'
                )
              p Список серверов пуст
</template>

<script>
export default {
  name: 'serverList',
  props: {
    data: {
      type: Array,
      required: true
    },
    isLoading: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      selected: {},
      columns: [
        {
          field: 'customer_id',
          label: 'ID',
          width: '60'
        },
        {
          field: 'server_name',
          label: 'Название сервера'
        },
        {
          field: 'server_type',
          label: 'Тип сервера'
        }
      ]
    }
  },
  methods: {
    addListenerEsc () {
      document.addEventListener('keyup', e => {
        if (e.code === 'Escape') this.selected = {}
      })
    }
  },
  watch: {
    selected () {
      this.$emit('selectServer', this.selected)
    }
  },
  mounted () {
    this.addListenerEsc()
  }
}
</script>

<style lang="sass" scoped>
div.table-box
  border: 1px solid $color-alt
  border-radius: 8px
  padding: 20px 10px 15px
  @media (min-width: $display-bp-mobile)
    padding: 22px 20px 20px

p.subtitle
  color: $color-alt
  font-size: 1rem
  margin: -1rem 0 2rem !important
</style>

<style lang="sass">
@media (max-width: $display-bp-mobile)
  div.b-table.has-mobile-cards tr
    box-shadow: none
    border-radius: 6px
    border: 1px solid $color-alt
    margin-top: 10px
    &.table-footer
      border: none
</style>
