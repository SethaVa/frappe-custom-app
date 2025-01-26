import clsx from "clsx";
import { useFrappeGetCall } from "frappe-react-sdk";
import PropTypes from "prop-types";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import SectionTitle from "../../components/section-title/SectionTitle";
import ProductGrid from "./ProductGrid";

const TabProduct = ({ spaceTopClass, spaceBottomClass, bgColorClass }) => {
  const { data: productNew } = useFrappeGetCall(
    "evcar.api.item.get_latest_products",
    {
      category: "Vehicle",
    }
  );

  const { data: bestSaleProduct } = useFrappeGetCall(
    "evcar.api.item.get_best_sale_items",
    {
      category: "Vehicle",
    }
  );

  const { data: AccessoryNew } = useFrappeGetCall(
    "evcar.api.item.get_latest_products",
    {
      category: "Accessory",
    }
  );

  const { data: bestSaleAccessory } = useFrappeGetCall(
    "evcar.api.item.get_best_sale_items",
    {
      category: "Accessory",
    }
  );

  return (
    <div
      className={clsx(
        "product-area",
        spaceTopClass,
        spaceBottomClass,
        bgColorClass
      )}
    >
      <div className="container mt-50">
        <SectionTitle
          titleText="DAILY COLLECTION DEALS!"
          positionClass="text-center"
        />
        <Tab.Container defaultActiveKey="newArrival">
          <Nav
            variant="pills"
            className="product-tab-list pt-30 pb-55 text-center"
          >
            <Nav.Item>
              <Nav.Link eventKey="newArrival">
                <h4>New Arrivals</h4>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="bestSeller">
                <h4>Best Sellers</h4>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="newArrival">
              <div className="row">
                <ProductGrid
                  products={productNew?.message || []}
                  spaceBottomClass="mb-25"
                />
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="bestSeller">
              <div className="row">
                <ProductGrid
                  products={bestSaleProduct?.message || []}
                  spaceBottomClass="mb-25"
                />
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
      <div className="container mt-150">
        <SectionTitle
          titleText="DAILY ACCESSORY DEALS!"
          positionClass="text-center"
        />
        <Tab.Container defaultActiveKey="newArrival">
          <Nav
            variant="pills"
            className="product-tab-list pt-30 pb-55 text-center"
          >
            <Nav.Item>
              <Nav.Link eventKey="newArrival">
                <h4>New Arrivals</h4>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="bestSeller">
                <h4>Best Sellers</h4>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="newArrival">
              <div className="row">
                <ProductGrid
                  products={AccessoryNew?.message || []}
                  spaceBottomClass="mb-25"
                />
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="bestSeller">
              <div className="row">
                <ProductGrid
                  products={bestSaleAccessory?.message || []}
                  spaceBottomClass="mb-25"
                />
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </div>
  );
};

TabProduct.propTypes = {
  bgColorClass: PropTypes.string,
  category: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
};

export default TabProduct;
