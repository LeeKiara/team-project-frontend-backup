import styled from "@emotion/styled";

// 색상 변수 정의
const primaryColor = "#36364b";
const borderColor = "#e1e1e1";
const grayColor = "#999aa9";
const lightgrayColor = "#f5f6f9";
const blueColor = "#3d4ed7";
const lightblueColor = "#0c9cff";
const darkRedColor = "#e02020";

export const CartContainer = styled.div`
  section {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 900px;
  }
  .cart-header {
    margin-bottom: 20px;

    .title {
      font-size: 28px;
      font-weight: 600;
    }
  }

  .cart-layer-title {
    display: flex;
    flex-direction: row;
    background-color: ${lightgrayColor};
    width: 880px;
    height: 50px;
    align-items: center;
    padding-left: 20px;
    color: ${primaryColor};
    font-weight: 400;

    div {
      /* border: 1px solid black; */
      text-align: center;
    }
    div:nth-of-type(1) {
      width: 20px;
    }
    div:nth-of-type(2) {
      width: 700px;
    }
    div:nth-of-type(3) {
      width: 120px;
    }
    div:nth-of-type(4) {
      width: 180px;
    }
  }

  .cart-layer {
    display: flex;
    flex-direction: row;
    border: 2px solid ${lightgrayColor};
    height: 150px;
    align-items: center;
  }

  /* 장바구니 도서정보 */
  .bookinfo {
    flex: 1;
    display: flex;
    flex-direction: row;
    /* border: 1px solid red; */
    gap: 10px;

    label {
      margin-top: 0px;
      margin-left: 10px;
    }
    .box-bookgubun {
      margin: 8px 0;
    }
    .icon-bookgubun {
      display: inline-block;
      padding: 0 8px;
      width: auto;
      height: 22px;
      line-height: 20px;
      font-size: 12px;
      font-weight: 400;
      color: ${lightblueColor};
      border: 1px solid ${lightblueColor};
      border-radius: 4px;
    }

    .image {
      display: inline-block;
      margin: 0 23px 0 0;
      width: 110px;
      vertical-align: top;
    }

    .image img {
      display: block;
      width: 110px;
      height: 124px;
      border: 1px solid ${lightgrayColor};
    }
  }

  /* 장바구니 가격정보 */
  .priceinfo {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 30px;
    margin: 0px 20px;

    .book-quantity {
      display: inline-block;
      position: relative;
      width: 100%;
      vertical-align: middle;
      border: 1px solid ${borderColor};
      border-radius: 4px;
      overflow: hidden;
      margin-top: 15px;

      input[type="number"] {
        display: block;
        float: left;
        margin: 0;
        padding: 0;
        /* width: calc(100% - 20px); */
        width: calc(100%);
        height: 30px;
        font-size: 14px;
        text-indent: 16px;
        border: none;
        border-radius: 0;
        pointer-events: none;
      }

      .quantity-nav {
        position: absolute;
        right: 0;
        top: 1px;
        height: 100%;

        .quantity-up,
        .quantity-down {
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          width: 20px;
          text-align: center;
          color: ${primaryColor};
          font-size: 13px;
          line-height: 20px;
          cursor: pointer;
          background: #f6f7fb;
          border-left: 1px solid ${borderColor};
          transform: translateX(-100%);
          user-select: none;
        }

        .quantity-up {
          position: absolute;
          height: 50%;
          top: 0;
          border-bottom: 1px solid #eee;
        }

        .quantity-down {
          position: absolute;
          bottom: 0;
          height: 50%;
        }
      }
    }

    .box-price {
      font-size: 16px;
      letter-spacing: -1px;
      /* border: 1px solid black; */
    }

    .box-price strong {
      font-size: 24px;
    }

    .box-price del {
      display: block;
      font-size: 14px;
      letter-spacing: -0.5px;
      color: #bfc1cd;
    }
  }

  /* 모바일 스타일 */
  @media (max-width: 768px) {
    section {
      width: 320px;
    }
    .cart-layer-title {
      display: none;
    }

    .cart-layer {
      flex-direction: column;
      height: 180px;
      align-items: center; /* 수직 가운데 정렬 추가 */
    }
    .bookinfo {
      flex: 1;
      display: flex;
      flex-direction: row;
      width: 300px;
    }
    .priceinfo {
      display: flex;
      flex-direction: row;
      align-items: center; /* 수직 가운데 정렬 추가 */
      gap: 30px;
      margin: 10px 20px;
    }
  }

  /* 합계금액 */
  .box-total-payment {
    display: flex;
    margin-top: 50px;
    margin-bottom: 32px;
    padding: 28px 32px;
    font-size: 14px;
    font-weight: 400;
    color: ${primaryColor};
    border: 1px solid #999aa9;
    justify-content: space-between;

    .total-text {
      width: 80px;
      font-weight: 700;
    }

    .total-sum {
      line-height: 1;
      text-align: center;
      font-weight: 400;
    }

    .total-sum strong {
      display: inline-block;
      position: relative;
      top: -2px;
      margin: 0 0 0 15px;
      line-height: 1.5;
      vertical-align: middle;
      font-size: 18px;
      letter-spacing: -1px;
      color: #0091ff;
    }

    .total-sum i {
      display: inline-block;
      position: relative;
      top: -2px;
      margin: 0 20px;
      font-weight: 400;
      vertical-align: middle;
      font-style: normal;
      font-size: 20px;
      color: #8d99ae;
    }

    .total-price {
      width: 240px;
      text-align: right;
      font-size: 14px;
      font-weight: 500;
    }

    .total-price strong {
      display: inline-block;
      vertical-align: middle;
      margin: -6px 2px 0 15px;
      font-size: 24px;
      letter-spacing: -1px;
      color: ${darkRedColor};
    }
  }

  .box-submit-payment {
    position: relative;
    display: flex;
    justify-content: space-between;
    margin-top: 32px;

    .btn-order {
      display: block;
    }

    .btn-order button {
      display: block;
      width: 218px;
      height: 74px;
      line-height: 1;
      text-align: center;
      font-size: 20px;
      font-weight: 500;
      color: #fff;
      border-radius: 4px;
      background: #3d4ed7;
      border: 0;
    }
    dt {
      margin: 0 0 16px 0;
      padding: 0 0 0 30px;
      line-height: 22px;
      font-size: 14px;
      font-weight: 500;
      color: ${darkRedColor};
      background: url(/images/pc/icon_notice_type1.png) no-repeat left top;
    }
    dd {
      font-size: 13px;
      font-weight: 400;
      line-height: 1.83;
    }
  }

  /* 모바일 스타일 */
  @media (max-width: 768px) {
    .payment-layer {
      height: 50px;
    }
    .box-total-payment {
      display: flex;
      flex-direction: column;
      padding: 0;

      .total-text {
        /* border-bottom: 1px dotted gray; */
        height: 30px;
      }
      .total-sum strong {
        display: inline;
        text-align: left;
      }

      .total-price {
        display: inline;
        text-align: left;
      }
    }

    .box-submit-payment {
      /* position: relative; */
      display: flex;
      flex-direction: column;
      /* margin-top: 32px; */

      .btn-order button {
        display: block;
        width: 330px;
        height: 60px;
        line-height: 1;
        text-align: center;
        font-size: 20px;
        font-weight: 500;
        color: #fff;
        border-radius: 4px;
        background: ${blueColor};
        border: 0;
        margin-bottom: 20px;
      }

      dl {
        display: none;
      }
    }
  }
`;
