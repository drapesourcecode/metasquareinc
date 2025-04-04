<template>
  <div>
    <div class="admin-dashboard">
      <!-- <div class="admin-header">
        <h1>Admin Dashboard</h1>
        <button @click="handleLogout" class="btn btn-danger">Logout</button>
      </div> -->

      <!-- <div class="admin-content">
        <div class="welcome-message">
          <h2>Welcome, {{ user?.name }}!</h2>
          <p>You are logged in as: {{ user?.email }}</p>
        </div>

        <div class="dashboard-stats">
          <div class="stat-card">
            <h3>Total Users</h3>
            <p>{{ stats.totalUsers || 0 }}</p>
          </div>
        </div>
      </div> -->
      <nav
        id="navigation"
        class="d-none d-lg-block navbar border-bottom navbar-expand-lg navbar-light bg-light text-white px-2 px-md-0"
      >
        <div class="container">
          <div
            class="navbar-collapse collapse"
            id="navbarSupportedContent"
            style=""
          >
            <ul class="navbar-nav nav-fill w-100 mr-auto">
              <li class="nav-item">
                <a class="nav-link first" href="https://funden.com/dashboard">
                  <i class="fas fa-xs fa-home mr-2"></i>
                  Dashboard
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="https://funden.com/firms">
                  <i class="far fa-xs fa-building mr-2"></i>
                  Investor Network
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://funden.com/intros">
                  <i class="far fa-xs fa-handshake mr-2"></i>
                  Intros
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://funden.com/crm">
                  <i class="fas fa-folder-open fa-xs mr-2"></i>
                  CRM
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://funden.com/af">
                  <i class="fas fa-award fa-xs mr-2"></i>
                  Assisted Fundraising
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://funden.com/deal-hub">
                  <i class="fas fa-tachometer-alt fa-xs mr-2"></i>
                  Deal Hub
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://funden.com/team">
                  <i class="fas fa-users fa-xs mr-2"></i>
                  Fundraising Team
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main>
        <div class="container space-1">
          <div class="page-header border-0 mb-0">
            <div class="row align-items-center">
              <div class="col-sm mb-2 mb-sm-0">
                <p class="small text-cap font-weight-bold">
                  <a class="text-muted" href="https://funden.com/dashboard"
                    >Home</a
                  >
                  <i class="px-2 fas fa-chevron-right"></i>
                  <a class="text-muted" href="https://funden.com/firms"
                    >Investor Network</a
                  >
                </p>
                <h1 class="page-header-title h2">Funden Investor Network</h1>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-3">
              <div class="navbar-expand-lg navbar-expand-lg-collapse-block">
                <!-- Responsive Toggle Button -->
                <button
                  type="button"
                  class="navbar-toggler btn btn-block border py-3 mb-3"
                  aria-label="Toggle navigation"
                  aria-expanded="false"
                  aria-controls="categoryNav"
                  data-toggle="collapse"
                  data-target="#categoryNav"
                >
                  <span
                    class="d-flex justify-content-between align-items-center"
                  >
                    <span class="h5 mb-0">Filter Investors</span>
                    <span class="navbar-toggler-default">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 18 18"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="currentColor"
                          d="M17.4,6.2H0.6C0.3,6.2,0,5.9,0,5.5V4.1c0-0.4,0.3-0.7,0.6-0.7h16.9c0.3,0,0.6,0.3,0.6,0.7v1.4C18,5.9,17.7,6.2,17.4,6.2z M17.4,14.1H0.6c-0.3,0-0.6-0.3-0.6-0.7V12c0-0.4,0.3-0.7,0.6-0.7h16.9c0.3,0,0.6,0.3,0.6,0.7v1.4C18,13.7,17.7,14.1,17.4,14.1z"
                        ></path>
                      </svg>
                    </span>
                    <span class="navbar-toggler-toggled">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 18 18"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="currentColor"
                          d="M11.5,9.5l5-5c0.2-0.2,0.2-0.6-0.1-0.9l-1-1c-0.3-0.3-0.7-0.3-0.9-0.1l-5,5l-5-5C4.3,2.3,3.9,2.4,3.6,2.6l-1,1 C2.4,3.9,2.3,4.3,2.5,4.5l5,5l-5,5c-0.2,0.2-0.2,0.6,0.1,0.9l1,1c0.3,0.3,0.7,0.3,0.9,0.1l5-5l5,5c0.2,0.2,0.6,0.2,0.9-0.1l1-1 c0.3-0.3,0.3-0.7,0.1-0.9L11.5,9.5z"
                        ></path>
                      </svg>
                    </span>
                  </span>
                </button>
                <!-- End Responsive Toggle Button -->

                <div id="categoryNav" class="collapse navbar-collapse">
                  <h4 class="border-bottom pb-4 mb-4">
                    <i class="fas fa-filter fa-xs"></i>
                    Filters
                  </h4>
                  <form
                    method="GET"
                    action="https://funden.com/firms"
                    accept-charset="UTF-8"
                    id="filterForm"
                    class=""
                    data-hs-cf-bound="true"
                  >
                    <div class="border-bottom pb-4 mb-4">
                      <h6 class="text-cap small">
                        <i class="fas fa-map-marker-alt"></i> Country
                      </h6>

                      <select
                        class="clear-on-submit js-example-basic-multiple selectized"
                        data-input="countries"
                        name="countries[]"
                        multiple="multiple"
                        tabindex="-1"
                        style="display: none"
                      ></select>
                      <div
                        class="selectize-control clear-on-submit js-example-basic-multiple multi plugin-remove_button"
                      >
                        <div class="selectize-input items not-full has-options">
                          <input
                            type="select-multiple"
                            autocomplete="off"
                            tabindex=""
                            style="width: 4px"
                          />
                        </div>
                        <div
                          class="selectize-dropdown multi clear-on-submit js-example-basic-multiple plugin-remove_button"
                          style="display: none"
                        >
                          <div class="selectize-dropdown-content"></div>
                        </div>
                      </div>

                      <!-- End Checkboxes -->
                      <input type="hidden" name="countries" value="" />
                    </div>

                    <div class="border-bottom pb-4 mb-4">
                      <h6 class="text-cap small">
                        <i class="fas fa-industry"></i> Sector
                      </h6>

                      <select
                        class="select-tree form-control clear-on-submit clone-to-input select2-hidden-accessible"
                        multiple=""
                        data-input="sectors"
                        name="sectors"
                        data-select2-id="select2-data-1-31o7"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <option value="all-sectors" class="l1">
                          All Sectors
                        </option>
                      </select>
                      <span
                        class="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id="select2-data-2-sit6"
                        style="width: 255px"
                        ><span class="selection"
                          ><span
                            class="select2-selection select2-selection--multiple"
                            role="combobox"
                            aria-haspopup="true"
                            aria-expanded="false"
                            tabindex="-1"
                            aria-disabled="false"
                            ><ul
                              class="select2-selection__rendered"
                              id="select2-sectors-x7-container"
                            ></ul>
                            <span class="select2-search select2-search--inline">
                              <textarea
                                class="select2-search__field"
                                type="search"
                                tabindex="0"
                                autocorrect="off"
                                autocapitalize="none"
                                spellcheck="false"
                                role="searchbox"
                                aria-autocomplete="list"
                                autocomplete="off"
                                aria-label="Search"
                                aria-describedby="select2-sectors-x7-container"
                                placeholder=""
                                style="width: 0.75em"
                              ></textarea></span></span></span
                        ><span
                          class="dropdown-wrapper"
                          aria-hidden="true"
                        ></span
                      ></span>

                      <input type="hidden" name="sectors" value="" />
                    </div>

                    <div class="border-bottom pb-4 mb-4">
                      <h6 class="text-cap small">Firm type</h6>

                      <select
                        class="clear-on-submit js-example-basic-multiple selectized"
                        data-input="types"
                        name="types[]"
                        multiple="multiple"
                        tabindex="-1"
                        style="display: none"
                      ></select>
                      <div
                        class="selectize-control clear-on-submit js-example-basic-multiple multi plugin-remove_button"
                      >
                        <div class="selectize-input items not-full has-options">
                          <input
                            type="select-multiple"
                            autocomplete="off"
                            tabindex=""
                            style="width: 4px"
                          />
                        </div>
                        <div
                          class="selectize-dropdown multi clear-on-submit js-example-basic-multiple plugin-remove_button"
                          style="display: none"
                        >
                          <div class="selectize-dropdown-content"></div>
                        </div>
                      </div>

                      <input type="hidden" name="types" value="" />
                    </div>

                    <div class="border-bottom pb-4 mb-4">
                      <h6 class="text-cap small">
                        <i class="far fa-clock"></i> Investment Stage
                      </h6>

                      <select
                        class="clear-on-submit js-example-basic-multiple selectized"
                        data-input="stages"
                        name="stages[]"
                        multiple="multiple"
                        tabindex="-1"
                        style="display: none"
                      ></select>
                      <div
                        class="selectize-control clear-on-submit js-example-basic-multiple multi plugin-remove_button"
                      >
                        <div class="selectize-input items not-full has-options">
                          <input
                            type="select-multiple"
                            autocomplete="off"
                            tabindex=""
                            style="width: 4px"
                          />
                        </div>
                        <div
                          class="selectize-dropdown multi clear-on-submit js-example-basic-multiple plugin-remove_button"
                          style="display: none"
                        >
                          <div class="selectize-dropdown-content"></div>
                        </div>
                      </div>

                      <input type="hidden" name="stages" value="" />
                    </div>

                    <div class="border-bottom pb-4 mb-4">
                      <h6 class="text-cap small">
                        <i class="fas fa-search"></i> Search
                      </h6>

                      <div class="form-row">
                        <input
                          class="form-control form-control-sm"
                          placeholder="Search by name, role, etc."
                          name="s"
                          value=""
                          type="text"
                        />
                      </div>
                    </div>

                    <div
                      class="input-group input-group-down-break border-bottom mb-4"
                    >
                      <h6 class="text-cap small">Settings</h6>

                      <div class="form-group mb-1">
                        <div class="custom-control custom-checkbox">
                          <input
                            type="hidden"
                            name="show_all_sectors"
                            value="off"
                          />
                          <input
                            type="checkbox"
                            id="show_all_sectors"
                            name="show_all_sectors"
                            class="custom-control-input"
                            checked=""
                          />
                          <label
                            class="custom-control-label small pt-1"
                            for="show_all_sectors"
                            >Show investors that invest in all sectors</label
                          >
                        </div>
                      </div>

                      <div class="form-group mb-1">
                        <div class="custom-control custom-checkbox">
                          <input
                            type="hidden"
                            name="show_everywhere_investors"
                            value="off"
                          />
                          <input
                            type="checkbox"
                            id="show_everywhere_investors"
                            name="show_everywhere_investors"
                            class="custom-control-input"
                            checked=""
                          />
                          <label
                            class="custom-control-label small pt-1"
                            for="show_everywhere_investors"
                          >
                            Show investors that invest in all countries
                          </label>
                        </div>
                      </div>

                      <div class="form-group">
                        <div class="custom-control custom-checkbox">
                          <input
                            type="hidden"
                            name="show_is_intro_enabled"
                            value="off"
                          />
                          <input
                            type="checkbox"
                            id="show_is_intro_enabled"
                            name="show_is_intro_enabled"
                            class="custom-control-input"
                            checked=""
                          />
                          <label
                            class="custom-control-label small pt-1"
                            for="show_is_intro_enabled"
                            >Only show investors in Funden's network</label
                          >
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      id="filterSubmit"
                      onclick="document.getElementById('export_csv').value='';"
                      class="btn btn-primary btn-block mt-3"
                    >
                      Apply Filters
                    </button>
                    <button
                      type="submit"
                      id="filterSubmit"
                      onclick="document.getElementById('export_csv').value='export-csv';"
                      class="btn btn-primary btn-block mt-3"
                    >
                      Export CSV
                    </button>
                    <input type="hidden" name="export_csv" id="export_csv" />
                  </form>
                </div>
              </div>
            </div>
            <div class="col-md-9">
              <div class="row">
                <div class="col-md-12 text-center">
                  <p class="small">Showing 12 of 1122 total results</p>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12 mb-5">
                  <div class="card border rounded-0 firm-card">
                    <div class="row no-gutters">
                      <div class="col-lg-3">
                        <a href="https://funden.com/firms/agthia-ventures">
                          <img
                            loading="lazy"
                            src="https://funden2.s3.us-west-1.amazonaws.com/54638/Screen-Shot-2023-10-25-at-1.03.47-PM.png"
                            class="p-5 w-100 border-right h-100 img-fluid"
                            alt="Agthia Ventures (F&amp;B Fund)"
                          />
                        </a>
                      </div>
                      <div class="col-lg-9">
                        <div class="card-block h-100 d-flex flex-column p-4">
                          <h4 class="card-title mb-1">
                            <a
                              class="text-dark"
                              href="https://funden.com/firms/agthia-ventures"
                            >
                              Agthia Ventures (F&amp;B Fund)
                            </a>
                          </h4>

                          <p class="small mb-1">
                            <i class="fas fa-map-marker-alt"></i>
                            United States &amp; 5 more
                          </p>
                          <p class="small mb-1">
                            <i class="fas fa-industry"></i>
                            Invests in Food and Beverage
                          </p>

                          <p class="small mb-1">
                            <i class="fas fa-clock"></i>
                            Seed, Series A, Growth
                          </p>

                          <div class="card-footer border-0 mt-auto p-0">
                            <div
                              class="btn-toolbar align-items-end justify-content-end"
                            >
                              <div
                                class="btn-group"
                                role="group"
                                aria-label="Basic example"
                              >
                                <a
                                  href="https://funden.com/firms/agthia-ventures"
                                  class="btn ml-auto btn-sm mt-auto btn-primary"
                                  >View</a
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-12 mb-5">
                  <div class="card border rounded-0 firm-card">
                    <div class="row no-gutters">
                      <div class="col-lg-3">
                        <a href="https://funden.com/firms/slauson-co">
                          <img
                            loading="lazy"
                            src="https://funden2.s3.us-west-1.amazonaws.com/53285/kan1krucbcvpozagzbym.webp"
                            class="p-5 w-100 border-right h-100 img-fluid"
                            alt="Slauson &amp; Co."
                          />
                        </a>
                      </div>
                      <div class="col-lg-9">
                        <div class="card-block h-100 d-flex flex-column p-4">
                          <h4 class="card-title mb-1">
                            <a
                              class="text-dark"
                              href="https://funden.com/firms/slauson-co"
                            >
                              Slauson &amp; Co.
                            </a>
                          </h4>

                          <p class="small mb-1">
                            <i class="fas fa-map-marker-alt"></i>
                            United States
                          </p>
                          <p class="small mb-1">
                            <i class="fas fa-industry"></i>
                            Invests in Small and Medium Businesses
                          </p>

                          <p class="small mb-1">
                            <i class="fas fa-clock"></i>
                            Pre-Seed, Seed
                          </p>

                          <div class="card-footer border-0 mt-auto p-0">
                            <div
                              class="btn-toolbar align-items-end justify-content-end"
                            >
                              <div
                                class="btn-group"
                                role="group"
                                aria-label="Basic example"
                              >
                                <a
                                  href="https://funden.com/firms/slauson-co"
                                  class="btn ml-auto btn-sm mt-auto btn-primary"
                                  >View</a
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> 
              </div>
              <div class="row">
                <div class="col-md-12">
                  <nav>
                    <ul class="pagination">
                      <li
                        class="page-item disabled"
                        aria-disabled="true"
                        aria-label="« Previous"
                      >
                        <span class="page-link" aria-hidden="true">‹</span>
                      </li>

                      <li class="page-item active" aria-current="page">
                        <span class="page-link">1</span>
                      </li>
                      <li class="page-item">
                        <a
                          class="page-link"
                          href="https://funden.com/firms?page=2"
                          >2</a
                        >
                      </li>
                      <li class="page-item">
                        <a
                          class="page-link"
                          href="https://funden.com/firms?page=3"
                          >3</a
                        >
                      </li>
                      <li class="page-item">
                        <a
                          class="page-link"
                          href="https://funden.com/firms?page=4"
                          >4</a
                        >
                      </li>
                      <li class="page-item">
                        <a
                          class="page-link"
                          href="https://funden.com/firms?page=5"
                          >5</a
                        >
                      </li>
                      <li class="page-item">
                        <a
                          class="page-link"
                          href="https://funden.com/firms?page=6"
                          >6</a
                        >
                      </li>
                      <li class="page-item">
                        <a
                          class="page-link"
                          href="https://funden.com/firms?page=7"
                          >7</a
                        >
                      </li>
                      <li class="page-item">
                        <a
                          class="page-link"
                          href="https://funden.com/firms?page=8"
                          >8</a
                        >
                      </li>
                      <li class="page-item">
                        <a
                          class="page-link"
                          href="https://funden.com/firms?page=9"
                          >9</a
                        >
                      </li>
                      <li class="page-item">
                        <a
                          class="page-link"
                          href="https://funden.com/firms?page=10"
                          >10</a
                        >
                      </li>

                      <li class="page-item disabled" aria-disabled="true">
                        <span class="page-link">...</span>
                      </li>

                      <li class="page-item">
                        <a
                          class="page-link"
                          href="https://funden.com/firms?page=93"
                          >93</a
                        >
                      </li>
                      <li class="page-item">
                        <a
                          class="page-link"
                          href="https://funden.com/firms?page=94"
                          >94</a
                        >
                      </li>

                      <li class="page-item">
                        <a
                          class="page-link"
                          href="https://funden.com/firms?page=2"
                          rel="next"
                          aria-label="Next »"
                          >›</a
                        >
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
const router = useRouter(); 
  
</script>

<style scoped>
</style>
