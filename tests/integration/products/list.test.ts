import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import mock from '../../mocks/product.mock';
import app from '../../../src/app';
import ProductModel, { ProductSequelizeModel } from '../../../src/database/models/product.model';

chai.use(chaiHttp);

describe('GET /products', function () { 
  beforeEach(function () { sinon.restore(); });
  it('retorna uma lista de produto', async function () {
    // Arrange
    sinon.stub(ProductModel, 'findAll').resolves(mock.productListMock as unknown as ProductSequelizeModel[]);

    // Act
    const httpResponse = await chai.request(app).get('/products');

    // Assert
    expect(httpResponse.status).to.equal(200);
    expect(httpResponse.body).to.deep.equal(mock.productListMock);
  })
});
