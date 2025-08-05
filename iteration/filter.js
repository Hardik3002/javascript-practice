	// •	Inside { } → you must write return for a value to come back.
	// •	Inside ( ) only → JavaScript automatically returns the result.

    const mynums = [1,23,4,56,7,8];

    // const myaction = mynums.filter((num) => {
    //     return num >23
    // })

const newnums = []

mynums.forEach((num) =>{
    if (num >23){
        newnums.push(num);
    }
})

// console.log("newnums are", newnums); 

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userbook = books.filter( (bkbooks) =>  bkbooks.genre == "History" )
  console.log("userbook is ",userbook);

  userbook = books.filter( (bkbooks) =>  bkbooks.publish > 1990 )
  console.log("userbook is ",userbook);