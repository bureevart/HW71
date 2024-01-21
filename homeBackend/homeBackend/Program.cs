var builder = WebApplication.CreateBuilder(args);


builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();

builder.Services.AddSpaStaticFiles(configuration => configuration.RootPath = "ClientApp");
var app = builder.Build();

app.UseSpaStaticFiles();

app.UseSpa(spa => spa.Options.SourcePath = "ClientApp");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
