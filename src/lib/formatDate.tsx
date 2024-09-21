const formatDate = (dateStr:string) => {
    const date = new Date(dateStr);
    if (dateStr === null) {
      return "No date";
    } else {
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const monthName = monthNames[date.getMonth()];
      const day = date.getDate();
      return `${monthName} ${day}`;
    }
  };

  export default formatDate