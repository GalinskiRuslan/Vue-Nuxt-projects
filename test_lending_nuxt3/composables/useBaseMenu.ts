const useBaseMenu = () => {
  const isActive = useState("Active", () => false);

  const toggleBaseMenu = () => {
    isActive.value = !isActive.value;
  };
  return {
    isActive,
    toggleBaseMenu,
  };
};

export default useBaseMenu;
