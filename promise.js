const ktmagna_jada =
  // bach kasam garna thalinxa
  new Promise((resolve, reject) => {
    // yadi kta aayo aus bata vanya
    let ktaKoPRxa = true;

    if (!ktaKoPRxa) {
      // it means kta aayo ko  opposite (kta aayana)

      reject("hamro xori ley mandina ");
    } else {
      resolve("hajur juwai sab bihya kati gatya fix garam");
    }
  });
ktmagna_jada.then((msg) => console.log(msg)).catch((err) => console.log(err));
