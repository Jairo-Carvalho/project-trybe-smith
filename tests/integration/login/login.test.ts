import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import mock from '../../mocks/login.mock';
import app from '../../../src/app';
import UserModel from '../../../src/database/models/user.model';

chai.use(chaiHttp);

describe('POST /login', function () { 
  beforeEach(function () { sinon.restore(); });
  it('efetua login com sucesso', async function () {
    // Arrange
    const httpRequestBody = mock.loginSuccess;
    const mockFindOneReturn = UserModel.build(mock.userLogin);
    sinon.stub(UserModel, 'findOne').resolves(mockFindOneReturn);

    // Act
    const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);

    // Assert
    expect(httpResponse.status).to.equal(200);
  })
  it('efetua login sem nome', async function () {
    // Arrange
    const httpRequestBody = mock.loginNameVoid;

    // Act
    const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);

    // Assert
    expect(httpResponse.status).to.equal(400);
    expect(httpResponse.body).to.deep.equal({ message: '"username" and "password" are required' });
  })
  it('efetua login com username inválido', async function () {
    // Arrange
    sinon.stub(UserModel, 'findOne').resolves(null);

    // Act
    const httpRequestBody = mock.loginErrorName;
    const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);

    // Assert
    expect(httpResponse.status).to.equal(401);
    expect(httpResponse.body).to.deep.equal({ message: 'Username or password invalid' });
  })
  it('efetua login com password inválido', async function () {
    // Arrange
    const mockFindOneReturn = UserModel.build(mock.userLogin);
    sinon.stub(UserModel, 'findOne').resolves(mockFindOneReturn);

    // Act
    const httpRequestBody = mock.loginErrorPassword;
    const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);

    // Assert
    expect(httpResponse.status).to.equal(401);
    expect(httpResponse.body).to.deep.equal({ message: 'Username or password invalid' });
  })
});
