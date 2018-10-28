const expect = require('chai').expect;

describe('check for ship', () => {
  const checkForShip = require('../game_logic/ship_methods').checkForShip;

  it('should correctly report no ship at a given players coordinate', () => {
    player = {
      ships: [
        {
          locations: [[0,0]]
        }
      ]
    }
    expect(checkForShip(player, [9, 9])).to.be.false;
  });
  it('should correctly report a ship at a given players coordinate', () => {
    player = {
      ships: [
        {
          locations: [[0,0]]
        }
      ]
    }
    expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
  });
  it('should handle ships located at more than one coordinate', () => {
    player = {
      ships: [
        {
          locations: [[0,0], [0,1]]
        }
      ]
    }
    expect(checkForShip(player, [0, 1])).to.be.deep.equal(player.ships[0]);
    expect(checkForShip(player, [0, 0])).to.be.deep.equal(player.ships[0]);
    expect(checkForShip(player, [9, 9])).to.be.false;
  });
  it('should handle ships located at more than one location', () => {
    player = {
      ships: [
        {
          locations: [[0,0], [0,1]]
        },
        {
          locations: [[1,0], [1,1]]
        },
        {
          locations: [[2,0], [2,1], [2,2], [2,3]]
        }
      ]
    }
    expect(checkForShip(player, [0, 1])).to.be.deep.equal(player.ships[0]);;
    expect(checkForShip(player, [0, 0])).to.be.deep.equal(player.ships[0]);;
    expect(checkForShip(player, [1, 0])).to.be.deep.equal(player.ships[1]);;
    expect(checkForShip(player, [1, 1])).to.be.deep.equal(player.ships[1]);
    expect(checkForShip(player, [2, 3])).to.be.deep.equal(player.ships[2]);
    expect(checkForShip(player, [9, 9])).to.be.false;
  });
});

describe('damageShip', ( ) => {
  const damageShip = require('../game_logic/ship_methods').damageShip;

  it('should register damage on a given ship at a given location', () => {
    let ship = {
      locations: [[0,0]],
      damage: []
    };

    damageShip(ship, [0,0]);

    expect(ship.damage).to.not.be.empty;
    expect(ship.damage[0]).to.deep.equal([0,0]);
    
  });
});

describe('fire', () => {
  const fire = require('../game_logic/ship_methods').fire;

  it('should record damage on the given players ship at the given coordinate', () => {
      let player = {
        ships: [
          {
          locations: [[0,0]],
          damage: []
          }
        ]
      };
      fire(player, [0,0]);

      expect(player.ships[0].damage[0]).to.deep.equal([0,0]);
  })

  it('should not record damage if there is not a ship at coordinate', () => {
    let player = {
      ships: [
        {
        locations: [[0,0]],
        damage: []
        }
      ]
    };
    fire(player, [9,9]);

    expect(player.ships[0].damage).to.be.empty;
})
})