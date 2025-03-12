const MembersCountShorterner = (count: number) => {
    if (count > 99) {
      return '99+';
    }
    return String(count);
  };

export default MembersCountShorterner;