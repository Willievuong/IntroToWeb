import asyncio
import websockets

async def hello(websocket):
    name = await websocket.recv()
    print(f"<<< {name}")

    reply = f'Hello {name}'
    await websocket.send(reply)
    print(f">>> {reply}")

async def main():
    async with websockets.serve(hello, "localhost", 8765):
        await asyncio.Future()

if __name__ == "__main__":
    asyncio.run(main())

