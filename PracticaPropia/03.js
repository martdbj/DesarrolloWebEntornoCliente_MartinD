let alumno = {
    edad: 18,
    admin: false,
    stats: {
        post: 0,
        followers: 0
    },

    incrementarStats(tipo, n) {
        if (this.stats?.[tipo] != undefined) {
            this.stats[tipo] += n;
        }
    }
}
alumno.incrementarStats("post", 5);
alumno.incrementarStats("followers", 3)

alert(alumno.stats.followers)

