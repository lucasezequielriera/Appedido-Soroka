const Navbar = (props) => {
  return (
    <div>
        <ul id="dropdown1" class="dropdown-content">
            <li><a href="test">{props.categorias[0]}</a></li>
            <li class="divider"></li>
            <li><a href="test">{props.categorias[1]}</a></li>
        </ul>
        <nav>
            <div class="nav-wrapper">
                <a href="#!" class="brand-logo">{props.brand}</a>
                <ul class="right hide-on-med-and-down">
                    <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">Categorias<i class="material-icons right">arrow_drop_down</i></a></li>
                </ul>
            </div>
        </nav>
    </div>
  );
};

export default Navbar;