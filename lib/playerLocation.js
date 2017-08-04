module.exports = function playerLocation(dispatch){
	var cid = null,
		location = null,
		topo = 0;

	dispatch.hook('S_LOAD_TOPO', 1, event => { topo = event.zone })
	dispatch.hook('S_LOGIN', 1, event => { ({cid} = event) })
	dispatch.hook('C_PLAYER_LOCATION', 1, event => { location = {x: event.x1, y: event.y1, z: event.z1} })
	dispatch.hook('S_SPAWN_ME', 1, event => { location = {x: event.x, y: event.y, z: event.z} })

	this.getCid = () => {return cid}
	this.getLocation = () => {return location}
	this.getTopo = () => {return topo}
	this.isInside = (id) => {return id == topo}
}