import React from "react";

import Collapsible from "react-collapsible";

import GridSmall from "../styles/grid-small";

const PeopleInfo = () => {
  return (
    <GridSmall>
      <div>
        <p>Relationships</p>
        <Collapsible trigger="Family">
          <p>Grandfather</p>
          <p>Grandmother</p>
          <p>Uncle</p>
          <p>Aunt</p>
          <p>Husband</p>
          <p>Wife</p>
          <p>Mother</p>
          <p>Father</p>
          <p>Sibling</p>
          <p>Older sister</p>
          <p>Younger sister</p>
          <p>Older brother</p>
          <p>Younger brother</p>
          <p>Cousin</p>
          <p>Child</p>
          <p>Grandson</p>
          <p>Granddaughter</p>
        </Collapsible>
        <Collapsible trigger="Other">
          <p>Boyfriend</p>
          <p>Girlfriend</p>
          <p>Friend</p>
          <p>Acquaintance</p>
          <p>Colleague</p>
          <p>Boss</p>
          <p>Teacher</p>
          <p>Class mate</p>
          <p>Cohabitant</p>
          <p>Landlord</p>
          <p>Tenant</p>
          <p>Fiancé</p>
        </Collapsible>
      </div>

      <div>
        <p>Body</p>
        <Collapsible trigger="Head">
          <p>Hair</p>
          <p>Forehead</p>
          <p>Eyebrow</p>
          <p>Eye</p>
          <p>Eyelash</p>
          <p>Nose</p>
          <p>Mouth</p>
          <p>Lip</p>
          <p>Teeth</p>
          <p>Cheek</p>
          <p>Chin</p>
          <p>Ear</p>
          <p>Tongue</p>
        </Collapsible>
        <Collapsible trigger="Body">
          <p>Neck</p>
          <p>Chest</p>
          <p>Back</p>
          <p>Rib</p>
          <p>Stomach</p>
          <p>Waist</p>
        </Collapsible>
        <Collapsible trigger="Arm">
          <p>Shoulder</p>
          <p>Elbow</p>
          <p>Wrist</p>
          <p>Hand</p>
          <p>Palm</p>
          <p>Finger</p>
        </Collapsible>
        <Collapsible trigger="Leg">
          <p>Thigh</p>
          <p>Knee</p>
          <p>Calf</p>
          <p>Ancle</p>
          <p>Foot</p>
          <p>Toe</p>
        </Collapsible>
      </div>

      <div>
        <p>Clothing</p>
        <Collapsible trigger="Outwear">
          <p>Hat</p>
          <p>Scarf</p>
          <p>Jacket</p>
          <p>Coat</p>
          <p>Boots</p>
          <p>Mittens</p>
        </Collapsible>
        <Collapsible trigger="Casual">
          <p>Sweater</p>
          <p>T-shirt</p>
          <p>Shirt</p>
          <p>Singlet</p>
          <p>Pants</p>
          <p>Shorts</p>
          <p>Socks</p>
          <p>Shoes</p>
          <p>Hoodie</p>
        </Collapsible>
        <Collapsible trigger="Formal">
          <p>Dress</p>
          <p>Suit</p>
          <p>Dress shirt</p>
          <p>Skirt</p>
          <p>Blazer</p>
          <p>Stockings</p>
          <p>Blouse</p>
          <p>Pumps</p>
        </Collapsible>
        <Collapsible trigger="Workout">
          <p>Leggings</p>
          <p>Swimsuit</p>
          <p>Sneakers</p>
        </Collapsible>
        <Collapsible trigger="Accessories">
          <p>Belt</p>
          <p>Wrist watch</p>
          <p>Necklace</p>
          <p>Tie</p>
          <p>Bow tie</p>
          <p>Earrings</p>
          <p>Ring</p>
          <p>Bracelet</p>
          <p>Suspenders</p>
          <p>Purse</p>
          <p>Backpack</p>
        </Collapsible>
      </div>
    </GridSmall>
  );
};

export default PeopleInfo;
