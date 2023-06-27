<template>
  <div class="container">
    <h1 class="HydraBanner">HydraBlog</h1>
  </div>


</template>

<style>
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: midnightblue;
  margin: -10px -10px 60px -10px;
  width: 120%;
  height: 140px;

}
.HydraBanner::before{
  content: '';
  flex: .55;
}
.HydraBanner {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 65px;
  font-family: Impact;
  margin: 0;
  font-weight: 2000;
  color: whitesmoke;
  background-color: midnightblue;
  width: 100%;
}

.HydraBanner::after {
  content: '';
  flex: 1;
}
</style>