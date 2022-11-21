namespace Taiizor.Essentials.Blazor.Extension.Meta
{
    public class Viewport
    {
        public static async Task Add(string Content)
        {
            await Interop.Call("Taiizor.Meta.Viewport.Add", Content);
        }
    }
}