<template>


    <div class="dropdown is-active"  >
      <div class="dropdown-trigger">
        <button
          class="button"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
        >
          <span class="icon is-small" >
            <i class="fa-solid fa-user fa-lg" aria-hidden="true"></i>
          </span>

          <span class="icon is-small">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </div>

      <div class="dropdown-menu" id="dropdown-menu" role="menu">
        <div class="dropdow-content">
          <a
            href="#"
            class="dropdown-item home-icon"
            @click="$router.push({ name: 'DashBoardView' })"
          >
            <i class="fa-solid fa-house-user fa-lg"></i>
            Home
          </a>
          <!-- 
          <a class="icon-theme dropdown-item" @click="changeTheme">
            <i class="fa-solid fa-moon"></i>

            {{ textButton }}
          </a> -->

          <a
            class="home-icon dropdown-item"
            @click="$router.push({ name: 'CreateView' })"
          >
            <i class="fa-solid fa-house-user fa-lg"></i>
            Cadastro
          </a>

          <!-- <a class="logout-icon dropdown-item" @click.prevent="logout">Sair </a> -->
          <!-- <i class="fa-solid fa-arrow-right-from-bracket fa-lg"></i> -->
        </div>
      </div>
    </div></template>