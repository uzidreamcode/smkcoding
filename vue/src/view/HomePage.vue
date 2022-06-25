		<template>
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
			
			

				<h1 style="text-align:center; margin-bottom:50px">{{ tampil }}</h1>
				
				<div  class="row">
					
		<div  v-for="(item, index) in items" :key="index" class="col-md-3" >
			<div class="container">
						<div   class="card" style="width: 18rem; margin-top:10px;  ">
							<img height="250" class="card-img-top" v-bind:src="item.foto" alt="Card image cap">
							<div class="card-body">
								<h5 class="card-title">{{ item.nama }}</h5>
								<ul class="list-group list-group-flush">
									<li class="list-group-item">Total Stok : {{ item.stok }} </li>
									<li  v-if="item.stok >=1 " class="list-group-item">Status Barang : tersedia </li>
									<li v-else class="list-group-item">Status Barang : Tidak Tersedia  </li>
									<router-link :to="'/about/'+item.id" class="btn btn-primary" tag="button">Detail Barang</router-link>
									
								</ul>
							</div>
						</div>
					</div>
		</div>
					
					</div>
			

																																																																
			
		
		</template>

		<script>
		import file from "@/static/file.js"

		export default {
			data() {
				return {
					tampil: 'Barang',
					items: file.arrayProduk,
					nilai: 100
				}
			},
			mounted() { 
				console.log("HOME")  
			}
		}
		</script>

		<style>

		</style>