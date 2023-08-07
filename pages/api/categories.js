

const handler = async( req,res)=>{
  try {
    const featuredCategories = {
      Processor:
        'https://www.intel.com/content/dam/www/central-libraries/us/en/images/alder-lake-i5-no12-original.png',
      Motherboard:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTibwraTUfQBlYCg3uSufeNR_t0JrCGQQd5jw&usqp=CAU',
      RAM: 'https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2NvbXB1dGVyLXJhbS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOiIxMjAwIn19fQ==',
      Monitor:
        'https://images.samsung.com/is/image/samsung/assets/us/computing/06222023/Odyssey_OLED_G95SC_Gaming_Monitor_PCD_DT_1440x810.jpg?imwidth=1536',
      GPU: 'https://static.tweaktown.com/news/9/1/91756_02_intel-announces-arc-pro-a60-and-a60m-gpus-for-the-workstation-market.jpg',
      Mouse:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCBbqrE2hJ8810CYLGDfY4tqs0zJeB8LjAFA&usqp=CAU',
      Others:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrtGy8mTWn11gbTX26Me8AwtoWIbTyeRcPpw&usqp=CAU',
    };
    res.send({
      success: true,
      data: featuredCategories
    })
  } catch (error) {
    res.send({
      success: false,
      error: error
    })
  }
}

export default handler