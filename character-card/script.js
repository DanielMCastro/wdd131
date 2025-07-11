const character = {
      name: "Snortleblat",
      class: "Swamp Beast Diplomat",
      level: 5,
      health: 100,
      image: 'https://andejuli.github.io/wdd131/character_card/snortleblat.webp',
      attacked() {
        console.log(this.health)
        if (this.health >= 20) {
          this.health -= 20;
        } else {
            alert('Character Died');
        }
      },
      levelUp() {
        this.level += 1;
        this.health += 20;
      }
    };


function render_character(){
  const char_image = document.getElementsByClassName('image')[0];
  const img = document.getElementsByClassName('');
  char_image.src = character.image;
  char_image.alt = character.name;

  const char_name = document.getElementsByClassName('name')[0];
  char_name.innerHTML = `<p>${character.name}</p>`;

  const char_class = document.getElementById('class');
  char_class.innerHTML = `${character.class}`;

  const char_level = document.getElementById('level');
  char_level.innerHTML = `${character.level}`;

  const char_health = document.getElementById('health');
  char_health.innerHTML = `${character.health}`;
}
render_character();

const attack = document.getElementById("attacked");
attack.addEventListener('click', () => {character.attacked(); render_character()});

const level = document.getElementById("levelup");
level.addEventListener('click', () => {character.levelUp(); render_character()});