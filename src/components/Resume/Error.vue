<template lang="html">
  <div class="container pretty">
    <div class="outer">
      <div class="inner">
        <div class="centered">
          <h3 style="font-weight:bold;">어머나, <br>아직 이력서 작성을<br>안하셨어요! </h3><br>
          <h4>이력서 작성하러 가기 -></h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.pretty {
  width:100%;
  height:100%;
  margin: 40px auto;
}

.outer {
  display: table;
  width: 100%;
  height: 100%;
}

.inner {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}

.centered {
  position: relative;
  display: inline-block;
  width: 70%;
  padding: 1em;
}
</style>
