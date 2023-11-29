// function banairako xau
async function pagal_khana_ko_paila_pugni() {
  console.log("1.Tapai haru jadai garnus");

  //   arko promise create garau
  const immediatePromise = new Promise((resolve) =>
    setTimeout(resolve, 8000)
  ).then(() => {
    console.log("2.Mah churot khayarw auxu 🚬");
  });

  //   3rd step ma
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log("vagya neupane pugyapaxi");

  await immediatePromise;
}

pagal_khana_ko_paila_pugni();

// output yo auxa hai
// 1.Tapai haru jadai garnus
// vagya neupane pugyapaxi
// 2.Mah churot khayarw auxu �
