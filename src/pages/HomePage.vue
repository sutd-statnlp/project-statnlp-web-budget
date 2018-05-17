<template>
  <div class="container">
    <div class="row row-cards">
       <div class="col-12">
        <div class="row">
          <div class="col-sm-4">
            <div class="card">
              <div class="card-body text-center">
                <div class="h5">Total Budget</div>
                <div class="display-4 font-weight-bold mb-4">S${{totalBudget | currency}}</div>
                <div class="progress progress-sm">
                  <div class="progress-bar bg-blue" style="width: 100%"></div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="col-sm-3">
            <div class="card">
              <div class="card-body text-center">
                <div class="h5">Total Organization</div>
                <div class="display-4 font-weight-bold mb-4">{{totalOrgs}}</div>
                <div class="progress progress-sm">
                  <div class="progress-bar bg-blue" style="width: 100%"></div>
                </div>
              </div>
            </div>
          </div> -->
          <div class="col-sm-4">
            <div class="card">
              <div class="card-body text-center">
                <div class="h5">Balance</div>
                <div class="display-4 font-weight-bold mb-4">S${{balance | currency}}</div>
                <div class="progress progress-sm">
                  <div class="progress-bar bg-blue" :style="'width: '+ (balance/totalBudget*100) + '%'"></div>
                </div>
              </div>
            </div>
          </div>
           <div class="col-sm-4">
            <div class="card">
              <div class="card-body text-center">
                <div class="h5">Usage</div>
                <div class="display-4 font-weight-bold mb-4">S${{usage | currency}}</div>
                <div class="progress progress-sm">
                  <div class="progress-bar bg-blue" :style="'width: '+ (usage/totalBudget*100) + '%'"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="table-responsive">
            <table id="tbl-orgs" class="table card-table table-vcenter text-nowrap">
              <thead>
                <tr>
                  <th class="w-1">#</th>
                  <th>Name</th>
                  <th>Amount</th>
                  <th class="text-center">Percentage</th>
                  <th>Usage</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in orgs" :key="index">
                  <td><span class="text-muted">{{index + 1}}</span></td>
                  <td>{{item.name}}</td>
                  <td class="m-amount">
                    <div class="input-group">
                      <span class="input-group-prepend">
                        <span class="input-group-text">S$<span hidden>{{item.amount}}</span></span>
                      </span>
                      <input type="number" min="0" v-model="item.amount" class="form-control text-right"  aria-label="Amount (to the nearest dollar)">
                    </div>

                  </td>
                  <td class="text-center">
                    <CircleProgress :percent="item.amount/totalBudget*100 | limit(2)" :percentValue="item.amount/totalBudget"/>
                  </td>
                   <td class="m-amount">
                    <div class="input-group">
                      <span class="input-group-prepend">
                        <span class="input-group-text">S$ <span hidden>{{item.usage}}</span></span>
                      </span>
                      <input type="number" min="0" v-model="item.usage" class="form-control text-right"  aria-label="Amount (to the nearest dollar)">
                    </div>
                  </td>
                  <td>
                    <textarea rows="2" class="form-control" placeholder="Enter description" value="Mike"  v-model="item.description"></textarea>
                    <span hidden>{{item.description}}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import CircleProgress from '@/components/CircleProgress'

export default {
  components: {
    CircleProgress
  },
  name: 'HomePage',
  data () {
    return {
      orgs: [
        {
          name: 'A*STAR',
          amount: 6000,
          usage: 0
        },
        {
          name: 'NTU',
          amount: 6000,
          usage: 0
        },
        {
          name: 'NUS',
          amount: 6000,
          usage: 0
        },
        {
          name: 'SMU',
          amount: 6000,
          usage: 0
        },
        {
          name: 'SUTD',
          amount: 6000,
          usage: 0
        },
        {
          name: 'Central Account',
          amount: 3000,
          usage: 0
        }
      ]
    }
  },
  methods: {
    save () {
      this.loadDataTable()
    },
    loadDataTable () {
      $('#tbl-orgs').DataTable({
        info: false,
        paging: false,
        searching: false,
        dom: 'Bfrtip',
        buttons: [
          {
            text: 'Save Change',
            action: function (e, dt, node, config) {
              this.loadDataTable()
            }.bind(this)
          },
          'copy', 'excel', 'pdf', 'pdf', 'print'
        ],
        destroy: true
      })
      $('.dt-buttons button').removeClass('dt-button')
      $('.dt-buttons button').addClass('btn')
      $('.dt-buttons button').addClass('btn btn-primary')
    }
  },
  mounted () {
    this.loadDataTable()
  },
  computed: {
    totalBudget () {
      let total = 0
      this.orgs.forEach(o => {
        if (o.amount === '') {
          o.amount = 0
        }
        total += parseFloat(o.amount)
      })
      return total
    },
    totalOrgs () {
      return this.orgs.length - 1
    },
    balance () {
      return this.totalBudget - this.usage
    },
    usage () {
      let total = 0
      this.orgs.forEach(o => {
        if (o.usage === '') {
          o.usage = 0
        }
        total += parseFloat(o.usage)
      })
      return total
    }
  }
}
</script>

<style scoped>
.m-amount {
  width: 160px;
}
</style>
