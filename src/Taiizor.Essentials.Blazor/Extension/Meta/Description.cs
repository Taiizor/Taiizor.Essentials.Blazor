namespace Taiizor.Essentials.Blazor.Extension.Meta
{
    public class Description
    {
        public static async Task Add(string Content)
        {
            await Interop.Call("Taiizor.Meta.Description.Add", Content);
        }
    }
}