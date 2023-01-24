import * as ethUtil from 'ethereumjs-util';

export class MessageHelper {
  public static signatureIsValid(
    address: string,
    message: string,
    signature: string,
  ): boolean {
    const msgHex = ethUtil.bufferToHex(Buffer.from(message));

    const msgBuffer = ethUtil.toBuffer(msgHex);
    const msgHash = ethUtil.hashPersonalMessage(msgBuffer);

    const signatureParams = ethUtil.fromRpcSig(signature);

    const publicKey = ethUtil.ecrecover(
      msgHash,
      signatureParams.v,
      signatureParams.r,
      signatureParams.s,
    );

    const addressBuffer = ethUtil.publicToAddress(publicKey);
    const signerAddress = ethUtil.bufferToHex(addressBuffer);

    return address.toLowerCase() === signerAddress.toLowerCase();
  }
}
